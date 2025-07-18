import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("borda-em-bloco", "border-block", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-em-bloco", valor);
        //     } else {
        //         validarMultiplosQualitativos("borda-em-bloco", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("borda-em-bloco", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
