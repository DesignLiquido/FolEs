import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEsquerdo extends Modificador {
    static nomeCss: string = "padding-left";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recuo-esquerdo", RecuoEsquerdo.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "recuo-esquerdo",
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
