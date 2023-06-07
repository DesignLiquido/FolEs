import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlinharVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha-base": "baseline",
        "linha-inferior": "sub",
        "linha-superior": "super",
        "topo-texto": "text-top",
        "base-texto": "text-bottom",
        "meio": "middle",
        "superior": "top",
        "inferior": "bottom",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alinhar-vertical", "vertical-align");

        validarValorNumerico('alinhar-vertical', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'alinhar-vertical' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
