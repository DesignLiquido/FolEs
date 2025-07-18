import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorCor } from "./validacoes/cor";

export class CorBorda extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-borda", "border-color", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (typeof valor === 'string' && valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("cor", "cor-borda", valor);
        //     } else {
        //         validarValorCor("cor-borda", valor);
        //     }
        // }

        this.valores = valores;
    }
}
