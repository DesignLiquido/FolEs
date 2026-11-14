import { BlocoDeclaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { Seletor, SeletorEstrutura } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { Metodo } from "../valores/metodos/foles/metodo";
import estruturasHtml from "../tradutores/estruturas-html";
import { DeclaracaoVariavel } from "../declaracoes/declaracao-variavel";
import { Declaracao } from "../declaracoes/declaracao";
import { SeletorModificador } from "../modificadores/superclasse";
import { fontes } from "../modificadores/atributos/fontes";
import { Valor, ValorAbreviacao, ValorNumerico, ValorQualitativo, ValorTexto, ValorVirgula } from "../valores";
import { ReferenciaVariavel } from "../valores/referencia-variavel";

/**
 * A classe que efetivamente traduz FolEs para CSS.
 *
 * Normalmente o CSS traduzido é desaninhado por uma questão de compatibilidade
 * entre navegadores. Até então, CSS aninhado é uma funcionalidade nova, e
 * apenas navegadores mais recentes a implementam.
 */
export class Resolvedor {
    resolverComAninhamentos: boolean;
    variaveis: { [key: string]: Valor[] };
    indentacao: number = 0;

    constructor(resolverComAninhamentos: boolean = false, configuracaoIndentacao: number = 4) {
        this.resolverComAninhamentos = resolverComAninhamentos;
        this.variaveis = {};
        this.indentacao = configuracaoIndentacao;
    }

    protected resolverValor(
        valor: Valor,
        valoresAceitos?: { [valorFoles: string]: string }
    ): string {
        switch (valor.constructor) {
            case ReferenciaVariavel:
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
            case ValorAbreviacao:
                return "/";
            case ValorNumerico:
                const valorNumerico = valor as ValorNumerico;
                let literalNumerico = String(valorNumerico.literalNumerico);

                if ((valorNumerico.quantificador) &&
                    (valorNumerico.literalNumerico < 1 && valorNumerico.literalNumerico > 0)
                ) {
                    literalNumerico = literalNumerico.replace(/^0\./, '.');
                }

                return `${literalNumerico}${valorNumerico.quantificador || ''}`;
            case ValorQualitativo:
                const valorQualitativo = valor as ValorQualitativo;
                let traducaoQualitativo = valoresGerais[valorQualitativo.qualitativo];

                if (!traducaoQualitativo) traducaoQualitativo = valoresAceitos[valorQualitativo.qualitativo];
                if (!traducaoQualitativo) traducaoQualitativo = valorQualitativo.qualitativo;
                return `${traducaoQualitativo}`;
            case ValorTexto:
                const valorTexto = valor as ValorTexto;
                return valorTexto.literalTexto;
            case ValorVirgula:
                return ",";
            default:
                // Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um método.
                if (valor instanceof Metodo) {
                    return valor.paraTexto();
                }

                throw new Error(JSON.stringify(valor) + " não é um valor válido para resolução.");
        }
    }

    protected resolverModificador(
        modificador: Modificador
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
        return `${" ".repeat(this.indentacao)}${modificador.propriedadeCss}: ${valoresTraduzidos};\n`;
    }

    private resolverTextoSeletor(seletor: Seletor): string {
        if (!(seletor instanceof SeletorEstrutura)) {
            return seletor.paraTexto();
        }

        const seletorLmht = seletor.paraTexto();
        if (!seletor.pseudoclasse) {
            return estruturasHtml[seletorLmht];
        }

        const seletorSemPseudoclasse = seletorLmht.split(":")[0];
        const traducaoSeletor = estruturasHtml[seletorSemPseudoclasse];
        const traducaoPseudoclasse = seletor.pseudoclasse.pseudoclasseCss;
        return `${traducaoSeletor}:${traducaoPseudoclasse}`;
    }

    resolverBlocoDeclaracao(
        declaracao: BlocoDeclaracao,
        textoSeletorAnterior: string,
    ): string {
        // Espaços reservados não são escritos diretamente no CSS.
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

    /**
     * Esta função pode ter dois comportamentos, dependendo da configuração
     * do Resolvedor:
     * 
     * - Acumula o valor da variável para ser usada por outras declarações;
     * - Escreve um `var()` no resultado.
     * @param declaracaoVariavel 
     */
    resolverDeclaracaoVariavel(
        declaracaoVariavel: DeclaracaoVariavel
    ): void {
        this.variaveis[declaracaoVariavel.nome] = declaracaoVariavel.valores;
    }

    /**
     * O processo de tradução. É recursivo.
     * @param declaracoes As declaracoes.
     * @returns Uma string com o resultado da tradução.
     */
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
