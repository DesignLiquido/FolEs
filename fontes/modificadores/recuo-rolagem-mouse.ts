import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RecuoRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("recuo-rolagem-mouse", "scroll-padding");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'recuo-rolagem-mouse' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) &&
                !(quantificador in ListaDeValorPercentual) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'recuo-rolagem-mouse' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
