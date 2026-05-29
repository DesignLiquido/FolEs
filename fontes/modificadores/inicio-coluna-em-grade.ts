import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "grid-column-start";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["inicio-coluna-em-grade", "início-coluna-em-grade"],
            InicioColunaEmGrade.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    'início-coluna-em-grade',
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                    true,
                );
            } else {
                validarValorNumerico(
                    "início-coluna-em-grade",
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
