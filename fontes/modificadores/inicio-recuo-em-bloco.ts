import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class InicioRecuoEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"],
            "padding-block-start"
        );

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'início-recuo-em-bloco' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'início-recuo-em-bloco' com quantificador inválido. Valores aceitos:
        ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
