import { BlocoDeclaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { SeletorEstrutura } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { Metodo } from "../valores/metodos/foles/metodo";
import estruturasHtml from "../tradutores/estruturas-html";
import { DeclaracaoVariavel } from "../declaracoes/declaracao-variavel";
import { Declaracao } from "../declaracoes/declaracao";
import { SeletorModificador } from "../modificadores/superclasse";
import { fontes } from "../modificadores/atributos/fontes";
import { Valor, ValorNumerico, ValorQualitativo, ValorTexto } from "../valores";
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

    constructor(resolverComAninhamentos: boolean = false) {
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
                let literalNumerico = String(valorNumerico.literalNumerico);
                
                if ((valorNumerico.quantificador) && 
                    (valorNumerico.literalNumerico < 1 && valorNumerico.literalNumerico > 0)
                ) {
                    literalNumerico = literalNumerico.replace(/^0\./, '.');
                }

                return `${literalNumerico}${valorNumerico.quantificador || ''}`;
            case 'ValorQualitativo':
                const valorQualitativo = valor as ValorQualitativo;
                let traducaoQualitativo = valoresGerais[valorQualitativo.qualitativo];

                if (!traducaoQualitativo) traducaoQualitativo = valoresAceitos[valorQualitativo.qualitativo];
                if (!traducaoQualitativo) traducaoQualitativo = valorQualitativo.qualitativo;
                return `${traducaoQualitativo}`;
            case 'ValorTexto':
                const valorTexto = valor as ValorTexto;
                return valorTexto.literalTexto;
            case 'ValorVirgula':
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
        return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${valoresTraduzidos};\n`;
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
            // Espaços reservados não são escritos diretamente no CSS.
            if (seletor instanceof SeletorEspacoReservado) {
                deveImprimir = false;
                continue;
            }

            let prefixo: string;
            if (seletor instanceof SeletorEstrutura) {
                if (seletor.pseudoclasse) {
                    const seletorLmht = seletor.paraTexto();
                    const seletorSemPseudoclasse = seletorLmht.split(":")[0];

                    const traducaoSeletor =
                        estruturasHtml[seletorSemPseudoclasse];
                    const traducaoPseudoclasse =
                        seletor.pseudoclasse.pseudoclasseCss;

                    prefixo = (
                        textoSeletorAnterior +
                        " " +
                        `${traducaoSeletor}:${traducaoPseudoclasse}`
                    ).trimStart();
                } else {
                    const seletorLmht = seletor.paraTexto();
                    const traducaoSeletor = estruturasHtml[seletorLmht];
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
