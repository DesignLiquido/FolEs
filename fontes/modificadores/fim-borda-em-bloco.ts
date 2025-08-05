import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class FimBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fim-borda-em-bloco", "border-block-end", pragmas);

        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "fim-borda-em-bloco", valor);
        //     } 

        validarMultiplosQualitativos("fim-borda-em-bloco", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
