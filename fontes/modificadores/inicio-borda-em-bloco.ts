import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class InicioBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-borda-em-bloco", "início-borda-em-bloco"],
            "border-block-start",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "início-borda-em-bloco", valor);
        //     }

        validarMultiplosQualitativos("início-borda-em-bloco", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
