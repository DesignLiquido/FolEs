import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEsquerdo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-esquerdo", "padding-left", pragmas);

        validarValorNumerico(
            "recuo-esquerdo", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
