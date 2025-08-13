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

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "linha-em-grade",
                valores,
                this.valoresAceitos
            );
        } else {
            validarValorNumerico(
                "linha-em-grade", 
                valores, 
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
