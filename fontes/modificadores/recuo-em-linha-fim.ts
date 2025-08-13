import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinhaFim extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-linha-fim", "padding-inline-end", pragmas);

        validarValorNumerico(
            "recuo-em-linha-fim", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
