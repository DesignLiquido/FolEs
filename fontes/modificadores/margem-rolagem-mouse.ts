import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-rolagem-mouse", "scroll-margin", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "margem-rolagem-mouse",
                valores,
                null,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "margem-rolagem-mouse",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
