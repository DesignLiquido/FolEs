import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexCrescimento extends Modificador {
    static nomeCss: string = "flex-grow";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flex-crescimento", FlexCrescimento.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "flex-crescimento",
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
