import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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
        super("alinhar-vertical", "vertical-align", pragmas);

        validarValorNumerico('alinhar-vertical', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('alinhar-vertical', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
