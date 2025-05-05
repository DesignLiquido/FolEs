import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AtrasoTransicao extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay",
            pragmas,
        );

        if (!valorVariavel) {
            if (valor.includes(",")) {
                validarAtribuicaoAbreviada("numérica", "atraso-transição", valor);
            } else {
                validarValorNumerico("atraso-transição", valor);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "atraso-transição",
                    quantificador,
                    valoresTemporais,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
