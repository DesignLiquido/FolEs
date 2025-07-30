import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"],
            "padding-block-start",
            pragmas,
        );

        validarValorNumerico(
            "início-recuo-em-bloco", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
