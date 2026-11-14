import { BlocoDeclaracao, Declaracao, DeclaracaoVariavel } from "../declaracoes";
import { Estrutura } from "../estruturas/estrutura";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { Seletor } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import estruturasLmht from "../tradutores/estruturas-lmht";
import { Valor, ValorNumerico, ValorQualitativo, ValorTexto } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { ReferenciaVariavel } from "../valores/referencia-variavel";

/**
 * O resolvedor reverso traduz de CSS para FolEs. Pode traduzir tanto FolEs
 * aninhado quanto desaninhado.
 */
export class ResolvedorReverso {
    resolverComAninhamentos: boolean;
    variaveis: { [key: string]: Valor[] };
    indentacao: number = 0;

    constructor(resolverComAninhamentos: boolean = true, configuracaoIndentacao: number = 4) {
        this.resolverComAninhamentos = resolverComAninhamentos;
        this.variaveis = {};
        this.indentacao = configuracaoIndentacao;
    }

    protected resolverValor(
        valor: Valor,
        valoresAceitos?: { [valorFoles: string]: string }
    ): string {
        switch (valor.constructor.name) {
            case 'ReferenciaVariavel':
                const valorReferenciaVariavel = valor as ReferenciaVariavel;
                const valoresVariavelCorrespondente = this.variaveis[valorReferenciaVariavel.nomeVariavel];
                if (valoresVariavelCorrespondente === undefined) {
                    throw new Error(`A variável '${valorReferenciaVariavel.nomeVariavel}' deve ser declarada antes da atribuição de valor.`);
                }

                let valoresVariavelResolvidos = "";
                for (const valorVariavel of valoresVariavelCorrespondente) {
                    const valorResolvido = this.resolverValor(valorVariavel);
                    if (valorResolvido === ",") {
                        valoresVariavelResolvidos = valoresVariavelResolvidos.slice(0, -1);
                    }
                    valoresVariavelResolvidos += valorResolvido + " ";
                }

                valoresVariavelResolvidos = valoresVariavelResolvidos.slice(0, -1);
                return valoresVariavelResolvidos;
            case 'ValorAbreviacao':
                return "/";
            case 'ValorNumerico':                
                const valorNumerico = valor as ValorNumerico;
                return `${valorNumerico.literalNumerico}${valorNumerico.quantificador || ''}`;
            case 'ValorQualitativo':
                const valorQualitativo = valor as ValorQualitativo;
                let traducaoQualitativo: any = undefined;

                for (const [chave, valor] of Object.entries(valoresGerais)) {
                    if (valor === valorQualitativo.qualitativo) {
                        traducaoQualitativo = chave;
                    }
                }

                if (!traducaoQualitativo) {
                    for (const [chave, valor] of Object.entries(valoresAceitos)) {
                        if (valor === valorQualitativo.qualitativo) {
                            traducaoQualitativo = chave;
                        }
                    }
                }

                if (!traducaoQualitativo) traducaoQualitativo = valorQualitativo.qualitativo;

                return `${traducaoQualitativo}`;
            case 'ValorTexto':
                const valorTexto = valor as ValorTexto;
                return valorTexto.literalTexto;
            case 'ValorVirgula':
                return ",";
            default:
                // Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um método.
                if (valor instanceof MetodoCss || valor instanceof Metodo) {
                    return valor.paraTexto();
                }

                throw new Error(JSON.stringify(valor) + " não é um valor válido para resolução.");
        }
    }

    resolverModificador(
        modificador: Modificador,
    ): string {
        let valoresTraduzidos = "";

        for (const valor of modificador.valores) {
            let valoresAceitos: { [valorFoles: string]: string } = null;
            if (modificador.valoresAceitos) valoresAceitos = modificador.valoresAceitos;

            const valorResolvido = this.resolverValor(valor, valoresAceitos);
            if (valorResolvido === ",") {
                valoresTraduzidos = valoresTraduzidos.slice(0, -1);
            }
            valoresTraduzidos += valorResolvido + " ";
        }

        valoresTraduzidos = valoresTraduzidos.slice(0, -1);

        return (
            " ".repeat(this.indentacao) +
            `${Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles}: ${valoresTraduzidos};\n`
        );
    }

    resolverDeclaracaoVariavel(
        declaracaoVariavel: DeclaracaoVariavel
    ): void {
        this.variaveis[declaracaoVariavel.nome] = declaracaoVariavel.valores;
    }

    private resolverTextoSeletor(seletor: Seletor): string {
        if (!(seletor instanceof Estrutura)) {
            return seletor.paraTexto();
        }

        const seletorHtml = seletor.tagHtml;
        if (!seletor.pseudoclasse) {
            return estruturasLmht[seletorHtml][0];
        }

        const seletorSemPseudoclasse = seletorHtml.split(":")[0];
        const traducaoSeletor = estruturasLmht[seletorSemPseudoclasse][0];
        const traducaoPseudoclasse = seletor.pseudoclasse.pseudoclasseCss;
        return `${traducaoSeletor}:${traducaoPseudoclasse}`;
    }

    resolverBlocoDeclaracao(
        declaracao: BlocoDeclaracao,
        textoSeletorAnterior: string,
    ): string {
        if (declaracao.seletores.some((seletor) => seletor instanceof SeletorEspacoReservado)) {
            return "";
        }

        // Seletores consecutivos formam um seletor descendente (`a b`);
        // a vírgula inicia um novo item da lista de seletores (`a, b`).
        const gruposDeSeletores: string[][] = [];
        for (const seletor of declaracao.seletores) {
            if (gruposDeSeletores.length === 0 || seletor.separadoPorVirgula) {
                gruposDeSeletores.push([]);
            }

            gruposDeSeletores[gruposDeSeletores.length - 1].push(
                this.resolverTextoSeletor(seletor),
            );
        }

        const prefixos = gruposDeSeletores.map((grupo) =>
            (textoSeletorAnterior + " " + grupo.join(" ")).trimStart(),
        );

        let resultado = " ".repeat(this.indentacao) + prefixos.join(", ") + " {\n";

        for (const modificador of declaracao.modificadores) {
            resultado += this.resolverModificador(
                modificador
            );
        }

        if (this.resolverComAninhamentos) {
            resultado += this.resolver(
                declaracao.declaracoesAninhadas,
            );
            resultado += `${" ".repeat(this.indentacao)}}\n\n`;
        } else {
            resultado += `${" ".repeat(this.indentacao)}}\n\n`;

            for (const prefixo of prefixos) {
                resultado += this.resolver(
                    declaracao.declaracoesAninhadas,
                    prefixo,
                );
            }
        }

        return resultado;
    }

    resolver(
        declaracoes: Declaracao[],
        seletorAnterior: string = undefined,
    ) {
        let resultado = "";
        let textoSeletorAnterior = "";
        if (seletorAnterior !== undefined) {
            textoSeletorAnterior = seletorAnterior;
        }

        for (const declaracao of declaracoes) {
            switch (declaracao.constructor.name) {
                case "BlocoDeclaracao":
                    resultado += this.resolverBlocoDeclaracao(
                        declaracao as BlocoDeclaracao,
                        textoSeletorAnterior,
                    );
                    break;
                case "DeclaracaoVariavel":
                    this.resolverDeclaracaoVariavel(
                        declaracao as DeclaracaoVariavel
                    );
                    break;
            }
        }

        return resultado;
    }
}
