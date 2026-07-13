import { BlocoDeclaracao, Declaracao, DeclaracaoVariavel } from "../declaracoes";
import { Estrutura } from "../estruturas/estrutura";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
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

    constructor(resolverComAninhamentos: boolean = true) {
        this.resolverComAninhamentos = resolverComAninhamentos;
        this.variaveis = {};
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
        indentacao: number = 0,
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
            " ".repeat(indentacao) +
            `${Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles}: ${valoresTraduzidos};\n`
        );
    }

    resolverDeclaracaoVariavel(
        declaracaoVariavel: DeclaracaoVariavel
    ): void {
        this.variaveis[declaracaoVariavel.nome] = declaracaoVariavel.valores;
    }

    resolverBlocoDeclaracao(
        declaracao: BlocoDeclaracao,
        indentacao: number,
        textoSeletorAnterior: string,
    ): string {
        let resultado = "";
        const prefixos = [];
        let deveImprimir = true;

        for (const seletor of declaracao.seletores) {
            if (seletor instanceof SeletorEspacoReservado) {
                deveImprimir = false;
                continue;
            }

            let prefixo: string;

            if (seletor instanceof Estrutura) {
                if (seletor.pseudoclasse) {
                    const seletorHtml = seletor.tagHtml;
                    const seletorSemPseudoclasse = seletorHtml.split(":")[0];

                    const traducaoSeletor =
                        estruturasLmht[seletorSemPseudoclasse][0];
                    const traducaoPseudoclasse =
                        seletor.pseudoclasse.pseudoclasseCss;

                    prefixo = (
                        textoSeletorAnterior +
                        " " +
                        `${traducaoSeletor}:${traducaoPseudoclasse}`
                    ).trimStart();
                } else {
                    const seletorLmht = seletor.tagHtml;
                    const traducaoSeletor = estruturasLmht[seletorLmht][0];
                    prefixo = (
                        textoSeletorAnterior +
                        " " +
                        traducaoSeletor
                    ).trimStart();
                }
            } else {
                prefixo = (
                    textoSeletorAnterior +
                    " " +
                    seletor.paraTexto()
                ).trimStart();
            }

            prefixos.push(prefixo);
            resultado += " ".repeat(indentacao) + prefixo + ", ";
        }

        if (!deveImprimir) {
            return resultado;
        }

        resultado = resultado.slice(0, -2);
        resultado += " {\n";
        if (resultado.includes(",")) resultado = resultado.replace(",", "");

        for (const modificador of declaracao.modificadores) {
            resultado += this.resolverModificador(
                modificador,
                indentacao + 4,
            );
        }

        if (this.resolverComAninhamentos) {
            resultado += this.resolver(
                declaracao.declaracoesAninhadas,
                indentacao + 4,
            );
            resultado += `${" ".repeat(indentacao)}}\n\n`;
        } else {
            resultado += `${" ".repeat(indentacao)}}\n\n`;

            for (const prefixo of prefixos) {
                resultado += this.resolver(
                    declaracao.declaracoesAninhadas,
                    indentacao,
                    prefixo,
                );
            }
        }

        return resultado;
    }

    resolver(
        declaracoes: Declaracao[],
        indentacao: number = 0,
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
                        indentacao,
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
