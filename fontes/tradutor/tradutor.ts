import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import { SeletorEstrutura } from "../seletores";
import { SeletorEspacoReservado } from "../seletores/seletor-espaco-reservado";
import { Metodo } from "../valores/metodos/metodo";

import estruturasHtml from "./estruturas-html";

export class Tradutor {
    traduzirModificador(modificador: Modificador): string {
        // Caso 1: Número-Quantificador ou somente Número.
        if (Number(modificador.valor)) {
            return `\t${modificador.propriedadeCss}: ${modificador.valor}${modificador.quantificador || ""
                };\n`;
        }

        // Caso 2: Tradução do valor contida no objeto 'valoresAceitos'.
        if (
            modificador["valoresAceitos"] !== undefined &&
            modificador["valoresAceitos"].hasOwnProperty(modificador.valor)
        ) {
            const objetoValores = modificador["valoresAceitos"];
            const valorTraduzido = objetoValores[modificador.valor];
            return `\t${modificador.propriedadeCss}: ${valorTraduzido};\n`;
        }

        // Caso 3: Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um método.
        if (modificador.valor instanceof Metodo) {
            return `\t${modificador.propriedadeCss}: ${modificador.valor.paraTexto() || ""};\n`;
        }

        // Caso 4: É um valor genérico, cuja tradução está na lista 'valoresGerais'.
        const valorTraduzido = valoresGerais[modificador.valor];
        return `\t${modificador.propriedadeCss}: ${valorTraduzido};\n`;
    }

    traduzir(declaracoes: Declaracao[]) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            let deveImprimir = true;

            for (const seletor of declaracao.seletores) {
                // Espaços reservados não são escritos diretamente no CSS.
                if (seletor instanceof SeletorEspacoReservado) {
                    deveImprimir = false;
                    continue;
                }

                if (seletor instanceof SeletorEstrutura){
                    const tagLmht = seletor.paraTexto();
                    const traducaoTag = estruturasHtml[tagLmht];
                    resultado += traducaoTag + ', ';
                } else {
                    resultado += seletor.paraTexto() + ', ';
                }
            }

            if (!deveImprimir) {
                continue;
            }

            resultado = resultado.slice(0, -2);
            resultado += ' {\n';

            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(modificador);
            }

            resultado += `}\n\n`;
        }

        return resultado;
    }
}