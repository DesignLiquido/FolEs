import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoTransicao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay",
            pragmas,
        );

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "atraso-transição",
                valores,
                null,
                null,
                valoresTemporais
            );
        } else {
            validarValorNumerico(
                "atraso-transição",
                valores,
                null,
                null,
                valoresTemporais
            );
        }

        this.valores = valores;
    }
}
