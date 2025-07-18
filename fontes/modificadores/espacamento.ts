import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Espacamento extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["espacamento", "espaçamento"], "gap", pragmas);

        const valoresExtra = ["calc"];

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (typeof valor === 'string' && valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "espaçamento", valores, undefined, valoresExtra);
        //     } else {
        //         validarValorNumerico("espaçamento", valores, undefined, valoresExtra);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "espaçamento",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
