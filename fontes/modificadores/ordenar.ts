import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Ordenar extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("ordenar", "order", pragmas);

        validarValorNumerico(
            "ordenar", 
            valores,
            null,
            null,
            null,
            null,
            true
        );

        this.valores = valores;
    }
}
