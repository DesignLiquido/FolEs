import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["inicio-borda-em-bloco", "início-borda-em-bloco"],
            "border-block-start",
            pragmas,
        );

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "início-borda-em-bloco", valor);
        //     } else {
        //         validarMultiplosQualitativos("início-borda-em-bloco", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("início-borda-em-bloco", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
