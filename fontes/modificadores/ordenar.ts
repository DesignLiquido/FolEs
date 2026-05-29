import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Ordenar extends Modificador {
    static nomeCss: string = "order";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("ordenar", Ordenar.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "ordenar",
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
