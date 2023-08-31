import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { SeletorEstrutura } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { Metodo } from "../valores/metodos/metodo";

import estruturasHtml from "./estruturas-html";

/**
 * A classe que traduz FolEs para CSS.
 */
export class Tradutor {
    private traduzirModificador(
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

        // Caso 4: É um valor genérico, cuja tradução está na lista 'valoresGerais'.
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
    traduzir(declaracoes: Declaracao[], indentacao: number = 0) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            let deveImprimir = true;

            for (const seletor of declaracao.seletores) {
                // Espaços reservados não são escritos diretamente no CSS.
                if (seletor instanceof SeletorEspacoReservado) {
                    deveImprimir = false;
                    continue;
                }

                if (seletor instanceof SeletorEstrutura) {
                    const seletorLmht = seletor.paraTexto();
                    const traducaoSeletor = estruturasHtml[seletorLmht];
                    resultado += " ".repeat(indentacao) + traducaoSeletor + ", ";
                } else {
                    resultado += " ".repeat(indentacao) + seletor.paraTexto() + ", ";
                }
            }

            if (!deveImprimir) {
                continue;
            }

            resultado = resultado.slice(0, -2);
            resultado += " {\n";

            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(
                    modificador,
                    indentacao + 2
                );
            }

            resultado += this.traduzir(
                declaracao.declaracoesAninhadas,
                indentacao + 2
            );
            resultado += `${" ".repeat(indentacao)}}\n\n`;
        }

        return resultado;
    }
}
