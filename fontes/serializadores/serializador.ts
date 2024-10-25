import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { SeletorEstrutura } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { Metodo } from "../valores/metodos/metodo";

import estruturasHtml from "../tradutores/estruturas-html";

/**
 * A classe que efetivamente traduz FolEs para CSS.
 * 
 * Normalmente o CSS traduzido é desaninhado por uma questão de compatibilidade
 * entre navegadores. Até então, CSS aninhado é uma funcionalidade nova, e 
 * apenas navegadores mais recentes a implementam.
 */
export class Serializador {
    serializarComAninhamentos: boolean;

    constructor(serializarComAninhamentos: boolean = false) {
        this.serializarComAninhamentos = serializarComAninhamentos;
    }

    private serializarModificador(
        modificador: Modificador,
        indentacao: number = 0
    ): string {
        // Caso 1: Número-Quantificador ou somente Número.
        if (Number(modificador.valor)) {
            return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${
                modificador.valor
            }${modificador.quantificador || ""};\n`;
        }

        // Caso 2: Tradução do valor contida no objeto 'valoresAceitos'.
        if (
            modificador["valoresAceitos"] !== undefined &&
            modificador["valoresAceitos"].hasOwnProperty(modificador.valor)
        ) {
            const objetoValores = modificador["valoresAceitos"];
            const valorTraduzido = objetoValores[modificador.valor];
            return `${" ".repeat(indentacao)}${
                modificador.propriedadeCss
            }: ${valorTraduzido};\n`;
        }

        // Caso 3: Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um método.
        if (modificador.valor instanceof Metodo) {
            return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${
                modificador.valor.paraTexto() || ""
            };\n`;
        }

        // Caso 4: Atribuição Abreviada | Múltiplos valores separados por espaço, vírgula ou barra
        if (modificador.valor.includes(' ')) {
            if (modificador.valor.includes(',')) {
                const separarValores: Array<string> = modificador.valor.split(', ');
                
                let valoresTraduzidos: string = '';
                separarValores.forEach((valorIndividual: string, indexIndividual: number) => {
                    if (modificador["valoresAceitos"] && modificador["valoresAceitos"].hasOwnProperty(valorIndividual)) {
                        const objetoValores = modificador["valoresAceitos"];
                        valoresTraduzidos += objetoValores[valorIndividual];
                        if (indexIndividual < separarValores.length - 1) {
                            valoresTraduzidos += ', ';
                        }
                    }
                });

                if (valoresTraduzidos.length !== 0) {
                    return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${
                        valoresTraduzidos
                    };\n`;
                } else {
                    return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${
                        modificador.valor
                    };\n`;
                }
            }

            return `${" ".repeat(indentacao)}${modificador.propriedadeCss}: ${
                modificador.valor
            };\n`;
        }
        
        // Caso 5: É um valor genérico, cuja tradução está na lista 'valoresGerais'.
        const valorTraduzido = valoresGerais[modificador.valor];
        return `${" ".repeat(indentacao)}${
            modificador.propriedadeCss
        }: ${valorTraduzido};\n`;
    }

    /**
     * O processo de tradução. É recursivo.
     * @param declaracoes As declaracoes.
     * @returns Uma string com o resultado da tradução.
     */
    serializar(declaracoes: Declaracao[], indentacao: number = 0, seletorAnterior: string = undefined) {
        let resultado = "";
        let textoSeletorAnterior = "";
        if (seletorAnterior !== undefined) {
            textoSeletorAnterior = seletorAnterior;
        }
        

        for (const declaracao of declaracoes) {
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

                        const traducaoSeletor = estruturasHtml[seletorSemPseudoclasse];
                        const traducaoPseudoclasse = seletor.pseudoclasse.pseudoclasseCss;
                        
                        prefixo = (textoSeletorAnterior + " " + `${traducaoSeletor}:${traducaoPseudoclasse}`).trimStart();
                    } else {
                        const seletorLmht = seletor.paraTexto();
                        const traducaoSeletor = estruturasHtml[seletorLmht];
                        prefixo = (textoSeletorAnterior + " " + traducaoSeletor).trimStart();
                    }
                } else {
                    prefixo = (textoSeletorAnterior + " " + seletor.paraTexto()).trimStart();
                }

                prefixos.push(prefixo);
                resultado += " ".repeat(indentacao) + prefixo + ", ";
            }

            if (!deveImprimir) {
                continue;
            }

            resultado = resultado.slice(0, -2);
            resultado += " {\n";
            

            for (const modificador of declaracao.modificadores) {
                resultado += this.serializarModificador(
                    modificador,
                    indentacao + 4
                );
            }

            if (this.serializarComAninhamentos) {
                resultado += this.serializar(
                    declaracao.declaracoesAninhadas,
                    indentacao + 4
                );
                resultado += `${" ".repeat(indentacao)}}\n\n`;
            } else {
                resultado += `${" ".repeat(indentacao)}}\n\n`;

                for (const prefixo of prefixos) {
                    resultado += this.serializar(
                        declaracao.declaracoesAninhadas,
                        indentacao,
                        prefixo
                    );
                }
            }
        }

        return resultado;
    }
}
