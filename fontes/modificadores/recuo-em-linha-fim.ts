import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinhaFim extends Modificador {
    static nomeCss: string = "padding-inline-end";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recuo-em-linha-fim", RecuoEmLinhaFim.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "recuo-em-linha-fim",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
