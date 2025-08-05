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

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "fim-borda-em-linha", valor);
        //     } 

        validarMultiplosQualitativos("fim-borda-em-linha", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
