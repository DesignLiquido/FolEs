import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoInferior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-inferior", "padding-bottom", pragmas);

        validarValorNumerico(
            "recuo-inferior", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
