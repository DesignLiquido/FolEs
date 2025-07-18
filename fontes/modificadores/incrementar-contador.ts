import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class IncrementarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("incrementar-contador", "counter-increment", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "incrementar-contador", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("incrementar-contador", valores, this.valoresAceitos);
        //     }
        // }

        this.valores = valores;
    }
}
