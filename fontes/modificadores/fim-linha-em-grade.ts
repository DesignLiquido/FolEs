import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class FimLinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fim-linha-em-grade", "grid-row-end", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "fim-linha-em-grade", 
                valores, 
                this.valoresAceitos,
                null,
                null,
                true
            );
            // TODO: Recebe validacaoPersonalizada como true
        } else {   
            validarValorNumerico(
                "fim-linha-em-grade",
                valores,
                this.valoresAceitos,
                null,
                null,
                null,
                true
            );
        }

        this.valores = valores;
    }
}
