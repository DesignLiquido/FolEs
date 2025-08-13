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

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "múltiplos-qualitativos", 
                "borda-em-linha", 
                valores,
                null,
                null,
                unidadesMedida
            );
        } else {
            validarMultiplosQualitativos(
                "borda-em-linha", 
                valores, 
                null, 
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
