import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexCrescimento extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("flex-crescimento", "flex-grow", pragmas);

        validarValorNumerico(
            "flex-crescimento", 
            valores,
            null,
            null,
            null,
            true
        );

        this.valores = valores;
    }
}
