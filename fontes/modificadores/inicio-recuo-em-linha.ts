import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class InicioRecuoEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"],
            "padding-inline-start"
        );

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
            `Propriedade 'início-recuo-em-linha' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) && !(quantificador in ListaDeValorPercentual) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'início-recuo-em-linha' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
