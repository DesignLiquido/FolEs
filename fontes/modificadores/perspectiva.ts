import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeComprimento } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class Perspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("perspectiva", "perspective");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'perspectiva' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
    ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeComprimento) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'perspectiva' com quantificador inválido. Valores aceitos:
        ${Object.keys(ListaDeComprimento).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
