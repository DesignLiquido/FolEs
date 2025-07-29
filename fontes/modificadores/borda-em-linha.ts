import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("borda-em-linha", "border-inline", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-em-linha", valor);
        //     } else {
        //         validarMultiplosQualitativos("borda-em-linha", valor);      
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("borda-em-linha", quantificador, unidadesMedida);
                
        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
