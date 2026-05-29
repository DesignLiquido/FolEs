import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBlocoFim extends Modificador {
    static nomeCss: string = "padding-block-end";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recuo-em-bloco-fim", RecuoEmBlocoFim.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "recuo-em-bloco-fim",
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
