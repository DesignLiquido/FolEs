import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class FimColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fim-coluna-em-grade", "grid-column-end", pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "fim-coluna-em-grade",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true
                );
            } else {
                validarValorNumerico(
                    "fim-coluna-em-grade",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
