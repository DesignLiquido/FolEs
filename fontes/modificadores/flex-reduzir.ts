import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexReduzir extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("flex-reduzir", "flex-shrink", pragmas);

        validarValorNumerico(
            "flex-reduzir", 
            valores,
            null,
            null,
            null,
            true
        );

        this.valores = valores;
    }
}
