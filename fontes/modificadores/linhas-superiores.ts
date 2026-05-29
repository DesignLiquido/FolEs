import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhasSuperiores extends Modificador {
    static nomeCss: string = "widows";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("linhas-superiores", LinhasSuperiores.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "linhas-superiores",
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
