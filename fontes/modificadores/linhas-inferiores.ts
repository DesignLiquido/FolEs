import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasInferiores extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("linhas-inferiores", "orphans", pragmas);

        validarValorNumerico(
            "linhas-inferiores", 
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
