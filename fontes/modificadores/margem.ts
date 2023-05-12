import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class Margem extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem", "margin");

        if (!(valor in this.valoresAceitos) &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'margem' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValorPercentual) &&
                !(quantificador in unidadesMedida) ||
                quantificador === undefined) {
                throw new Error(`Propriedade 'margem' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
