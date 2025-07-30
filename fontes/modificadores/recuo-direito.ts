import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoDireito extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-direito", "padding-right", pragmas);

        validarValorNumerico(
            "recuo-direito", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
