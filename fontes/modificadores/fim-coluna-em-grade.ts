import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FimColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fim-coluna-em-grade", "grid-column-end", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "fim-coluna-em-grade", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("fim-coluna-em-grade", valores, this.valoresAceitos);
        //     }
        // proibirQuantificador("fim-coluna-em-grade", quantificador);

        this.valores = valores;
    }
}
