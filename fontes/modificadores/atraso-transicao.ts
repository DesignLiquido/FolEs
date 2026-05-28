import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoTransicao extends Modificador {
    static nomeCss: string = "transition-delay";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["atraso-transicao", "atraso-transição"],
            AtrasoTransicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
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
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
