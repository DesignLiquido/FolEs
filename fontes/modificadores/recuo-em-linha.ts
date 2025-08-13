import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-linha", "padding-inline", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "recuo-em-linha", 
                valores,
                null,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "recuo-em-linha",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
