import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBlocoFim extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-bloco-fim", "padding-block-end", pragmas);

        validarValorNumerico(
            "recuo-em-bloco-fim", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
