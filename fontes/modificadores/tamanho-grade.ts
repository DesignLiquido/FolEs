import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("tamanho-grade", "grid-area", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes("/") || valor.includes(" ")) {
        //        validarAtribuicaoAbreviada("numérica", "tamanho-grade", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("tamanho-grade", valores, this.valoresAceitos);
        //     }
        // }

        this.valores = valores;
    }
}
