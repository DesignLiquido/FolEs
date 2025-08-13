import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"],
            "padding-inline-start",
            pragmas,
        );

        validarValorNumerico(
            "início-recuo-em-linha", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
