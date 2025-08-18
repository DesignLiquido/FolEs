import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasSuperiores extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("linhas-superiores", "widows", pragmas);

        validarValorNumerico(
            "linhas-superiores", 
            valores,
            null,
            null,
            null,
            true
        );

        this.valores = valores;
    }
}
