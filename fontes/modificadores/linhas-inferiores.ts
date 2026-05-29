import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasInferiores extends Modificador {
    static nomeCss: string = "orphans";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("linhas-inferiores", LinhasInferiores.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "linhas-inferiores",
                valores,
                null,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
