import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class InicioBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-borda-em-linha", "início-borda-em-linha"],
            "border-inline-start",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "início-borda-em-linha", valor);
        //     }

        validarMultiplosQualitativos("início-borda-em-linha", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
