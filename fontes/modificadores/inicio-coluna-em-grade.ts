import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class InicioColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-coluna-em-grade", "início-coluna-em-grade"],
            "grid-column-start",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", 'início-coluna-em-grade', valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("início-coluna-em-grade", valores, this.valoresAceitos);
        //     }

        //     proibirQuantificador("início-coluna-em-grade", quantificador);

        this.valores = valores;
    }
}
