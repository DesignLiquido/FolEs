import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-rolagem-mouse", MargemRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
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
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
