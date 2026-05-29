import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "grid-row";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("linha-em-grade", LinhaEmGrade.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "linha-em-grade",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    "linha-em-grade",
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
