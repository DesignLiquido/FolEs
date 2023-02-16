import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RecuoEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("recuo-em-linha-fim", "padding-inline-end");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'recuo-em-linha-fim' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'recuo-em-linha-fim' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
