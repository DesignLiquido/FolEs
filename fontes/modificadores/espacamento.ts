import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Espacamento extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["espacamento", "espaçamento"], "gap", pragmas);

        const valoresExtra = ["calc"];

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "espaçamento",
                valores,
                null,
                valoresExtra,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "espaçamento",
                valores,
                null,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
