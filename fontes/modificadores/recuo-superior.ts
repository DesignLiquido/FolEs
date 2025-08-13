import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoSuperior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-superior", "padding-top", pragmas);

        validarValorNumerico(
            "recuo-superior", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
