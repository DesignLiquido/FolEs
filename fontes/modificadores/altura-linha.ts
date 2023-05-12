import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlturaLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("altura-linha", "line-height");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'altura-linha' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Lógica diferente dos demais pois o modificador pode receber valores numéricos s/ quantificador
        if (quantificador !== undefined) {
            if (
                !(quantificador in unidadesMedida)
            ) {
                throw new Error(
                    `Propriedade 'altura-linha' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
