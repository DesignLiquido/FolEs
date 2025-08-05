import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("borda-em-bloco", "border-block", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-em-bloco", valor);
        //     } 
        
        validarMultiplosQualitativos("borda-em-bloco", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
