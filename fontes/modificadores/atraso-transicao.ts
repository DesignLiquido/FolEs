import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AtrasoTransicao extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay",
            pragmas,
        );

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(",")) {
        //         validarAtribuicaoAbreviada("numérica", "atraso-transição", valor);
        //     } else {
        //         validarValorNumerico("atraso-transição", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "atraso-transição",
        //             quantificador,
        //             valoresTemporais,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
