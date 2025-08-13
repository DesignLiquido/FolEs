import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class FimBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fim-borda-em-linha", "border-inline-end", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "múltiplos-qualitativos", 
                "fim-borda-em-linha", 
                valores
            );
        } else {
            validarMultiplosQualitativos(
                "fim-borda-em-linha", 
                valores, 
                null, 
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
