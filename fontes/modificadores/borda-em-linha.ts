import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("borda-em-linha", "border-inline", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-em-linha", valor);
        //     }

        validarMultiplosQualitativos("borda-em-linha", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
