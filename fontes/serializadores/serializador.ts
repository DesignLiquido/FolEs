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
import { Valor, ValorAbreviacao, ValorNumerico, ValorQualitativo, ValorTexto } from "../valores";
import { ReferenciaVariavel } from "../valores/referencia-variavel";

/**
 * A classe que efetivamente traduz FolEs para CSS.
 *
 * Normalmente o CSS traduzido é desaninhado por uma questão de compatibilidade
 * entre navegadores. Até então, CSS aninhado é uma funcionalidade nova, e
 * apenas navegadores mais recentes a implementam.
 */
export class Serializador {
    serializarComAninhamentos: boolean;
    variaveis: { [key: string]: Valor[] };

    constructor(serializarComAninhamentos: boolean = false) {
        this.serializarComAninhamentos = serializarComAninhamentos;
        this.variaveis = {};
    }

    protected serializarValor(valor: Valor): string {
        switch (valor.constructor.name) {
            case 'ReferenciaVariavel':
                const valorReferenciaVariavel = valor as ReferenciaVariavel;
                const valoresVariavelCorrespondente = this.variaveis[valorReferenciaVariavel.nomeVariavel];
                if (valoresVariavelCorrespondente === undefined) {
                    throw new Error(`A variável '${valorReferenciaVariavel.nomeVariavel}' deve ser declarada antes da atribuição de valor.`);
                }

                let valoresVariavelResolvidos = "";
                for (const valorVariavel of valoresVariavelCorrespondente) {
                    const valorSerializado = this.serializarValor(valorVariavel);
                    if (valorSerializado === ",") {
                        valoresVariavelResolvidos = valoresVariavelResolvidos.slice(0, -1);
                    }
                    valoresVariavelResolvidos += valorSerializado + " ";
                }

                valoresVariavelResolvidos = valoresVariavelResolvidos.slice(0, -1);
                return valoresVariavelResolvidos;
            case 'ValorAbreviacao':
                return "/";
            case 'ValorNumerico':
                const valorNumerico = valor as ValorNumerico;
                let literalNumerico = String(valorNumerico.literalNumerico);
                if (valorNumerico.literalNumerico < 1 && valorNumerico.literalNumerico > 0) {
                    literalNumerico = literalNumerico.replace(/^0\./, '.');
                }

                return `${literalNumerico}${valorNumerico.quantificador || ''}`;
            case 'ValorQualitativo':
                const valorQualitativo = valor as ValorQualitativo;
                const traducaoQualitativo = valoresGerais[valorQualitativo.qualitativo];
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

                console.log(valor);
        }
    }

    // TODO @Vitor: Montar a lógica para reconhecer variáveis aqui.
    protected serializarModificador(
        modificador: Modificador,
        indentacao: number = 0,
    ): string {
        let valoresTraduzidos = "";
        for (const valor of modificador.valores) {
            const valorSerializado = this.serializarValor(valor);
            if (valorSerializado === ",") {
                valoresTraduzidos = valoresTraduzidos.slice(0, -1);
            }
            valoresTraduzidos += valorSerializado + " ";
        }
        
        valoresTraduzidos = valoresTraduzidos.slice(0, -1);
        return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${valoresTraduzidos};\n`;
        // // Caso 1: Número-Quantificador ou somente Número.
        // if (Number(modificador.valores[0]) || modificador.valores[0] === "0") {
        //     return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${modificador.valores[0]
        //         }${modificador.quantificador || ""};\n`;
        // }

        // // Caso 2: Tradução do valor contida no objeto 'valoresAceitos'.
        // if (
        //     modificador["valoresAceitos"] !== undefined &&
        //     modificador["valoresAceitos"].hasOwnProperty(modificador.valores[0])
        // ) {
        //     const objetoValores = modificador["valoresAceitos"];
        //     const valorTraduzido = objetoValores[modificador.valores[0]];
        //     return `${" ".repeat(indentacao)}${modificador.propriedadeCss
        //         }: ${valorTraduzido};\n`;
        // }

        // // Caso 3: Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um método.
        // if (modificador.valores[0] instanceof Metodo) {
        //     return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${modificador.valores[0].paraTexto() || ""
        //         };\n`;
        // }

        // // `modificador.valores[0]` nunca será `MetodoCss` aqui, que só existe em casos de serialização reversa.
        // const valorResolvido = modificador.valores[0] as string;

        // // Caso 4: Valor com aspas - como as fontes de texto.
        // if (valorResolvido.includes('"')) {
        //     if (valorResolvido.includes(",")) {
        //         const separarValores = valorResolvido.split(", ");
        //         const valorSemAspas = separarValores[0].replace(/["']/g, '');

        //         // Trecho específico para tratamento de fontes com grafia
        //         if (Object.keys(fontes).includes(valorSemAspas)) {
        //             let unirValores = '';
        //             separarValores.forEach((valorIndividual) => {
        //                 if (
        //                     modificador["valoresAceitos"] !== undefined &&
        //                     modificador["valoresAceitos"].hasOwnProperty(valorIndividual)
        //                 ) {
        //                     const objetoValores = modificador["valoresAceitos"];
        //                     const valorTraduzido = objetoValores[valorIndividual];
        //                     separarValores[1] = valorTraduzido;
        //                     unirValores = separarValores.join(", ");
        //                 }
        //             });
        //             return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${unirValores};\n`;
        //         } 
                    
        //         return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${modificador.valores[0]};\n`;
        //     } 
                
        //     return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${modificador.valores[0]};\n`;
        // }

        // // Caso 5: Atribuição Abreviada | Múltiplos valores separados por vírgula, barra ou espaço
        // if (valorResolvido.includes(" ")) {
        //     let separarValores: Array<string> = [];

        //     if (valorResolvido.includes(",")) {
        //         separarValores = valorResolvido.split(", ");
        //     } else if (valorResolvido.includes("/")) {
        //         separarValores = valorResolvido.split(" / ");
        //     } else if (valorResolvido.includes(" ")) {
        //         separarValores = valorResolvido.split(" ");
        //     }

        //     separarValores.forEach((valorIndividual, indexIndividual) => {
        //         let valoresTraduzidos: string = "";

        //         if (
        //             modificador["valoresAceitos"] &&
        //             modificador["valoresAceitos"].hasOwnProperty(
        //                 valorIndividual,
        //             )
        //         ) {
        //             const objetoValores = modificador["valoresAceitos"];
        //             valoresTraduzidos += objetoValores[valorIndividual];
        //         } else if (valoresGerais[valorIndividual] !== undefined) {
        //             valoresTraduzidos += valoresGerais[valorIndividual];
        //         }

        //         if (valoresTraduzidos.length !== 0 && typeof modificador.valores[0] === 'string') {
        //             modificador.valores[0] = valorResolvido.replace(valorIndividual, valoresTraduzidos);
        //         }
        //     });

        //     return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${modificador.valores[0]};\n`;
        // }

        // // Caso 6: É um valor genérico, cuja tradução está na lista 'valoresGerais'.
        // const valorTraduzido = valoresGerais[valorResolvido];
        // return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${valorTraduzido};\n`;
    }

    serializarBlocoDeclaracao(
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
            resultado += this.serializarModificador(
                modificador,
                indentacao + 4,
            );
        }

        if (this.serializarComAninhamentos) {
            resultado += this.serializar(
                declaracao.declaracoesAninhadas,
                indentacao + 4,
            );
            resultado += `${" ".repeat(indentacao)}}\n\n`;
        } else {
            resultado += `${" ".repeat(indentacao)}}\n\n`;

            for (const prefixo of prefixos) {
                resultado += this.serializar(
                    declaracao.declaracoesAninhadas,
                    indentacao,
                    prefixo,
                );
            }
        }

        return resultado;
    }

    validarValoresVariaveis(declaracao: BlocoDeclaracao): void {
        const nomeFolEs =
            declaracao.modificadores[0].nomeFoles.length > 1 &&
                typeof declaracao.modificadores[0].nomeFoles === "object"
                ? declaracao.modificadores[0].nomeFoles[0].toString()
                : declaracao.modificadores[0].nomeFoles.toString();

        const valoresModificador = declaracao.modificadores[0].valores;

        new SeletorModificador(
            nomeFolEs,
            valoresModificador,
            declaracao.modificadores[0].pragmas
        );
    }

    /**
     * Esta função pode ter dois comportamentos, dependendo da configuração
     * do serializador:
     * 
     * - Acumula o valor da variável para ser usada por outras declarações;
     * - Escreve um `var()` no resultado.
     * @param declaracaoVariavel 
     */
    serializarDeclaracaoVariavel(
        declaracaoVariavel: DeclaracaoVariavel
    ): void {
        // TODO: Implementar escrita de `var()` no resultado. 
        this.variaveis[declaracaoVariavel.nome] = declaracaoVariavel.valores;
    }

    /**
     * O processo de tradução. É recursivo.
     * @param declaracoes As declaracoes.
     * @returns Uma string com o resultado da tradução.
     */
    serializar(
        declaracoes: Declaracao[],
        indentacao: number = 0,
        seletorAnterior: string = undefined,
    ) {
        this.variaveis = {};
        let resultado = "";
        let textoSeletorAnterior = "";
        if (seletorAnterior !== undefined) {
            textoSeletorAnterior = seletorAnterior;
        }

        for (const declaracao of declaracoes) {
            switch (declaracao.constructor.name) {
                case "BlocoDeclaracao":
                    resultado += this.serializarBlocoDeclaracao(
                        declaracao as BlocoDeclaracao,
                        indentacao,
                        textoSeletorAnterior,
                    );
                    break;
                case "DeclaracaoVariavel":
                    this.serializarDeclaracaoVariavel(
                        declaracao as DeclaracaoVariavel
                    );
                    break;
            }
        }

        return resultado;
    }
}
