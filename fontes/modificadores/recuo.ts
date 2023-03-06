import { valoresGlobais } from "./atributos/globais";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class Recuo extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    constructor(valor: string, quantificador?: string) {
        super("recuo", "padding");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'contorno' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in comprimentos) && 
                !(quantificador in ListaDeValorPercentual) || 
                quantificador === undefined) {
                throw new Error(`Propriedade 'contorno' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
