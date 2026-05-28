import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexReduzir extends Modificador {
    static nomeCss: string = "flex-shrink";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flex-reduzir", FlexReduzir.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "flex-reduzir",
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
