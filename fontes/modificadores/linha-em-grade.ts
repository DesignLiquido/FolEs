import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("linha-em-grade", "grid-row", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ") || valor.includes("/")) {
        //         validarAtribuicaoAbreviada("numérica", "linha-em-grade", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("linha-em-grade", valores, this.valoresAceitos);
        //     }

        this.valores = valores;
    }
}
