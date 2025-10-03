import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class InicioBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["inicio-borda-em-linha", "início-borda-em-linha"],
            "border-inline-start",
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "início-borda-em-linha",
                    valores
                );
            } else {
                validarMultiplosQualitativos(
                    "início-borda-em-linha",
                    valores,
                    null,
                    unidadesMedida
                );
            }
        }
        this.valores = valores;
        this.variavel = variavel;
    }
}
