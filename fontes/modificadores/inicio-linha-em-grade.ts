import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class InicioLinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-linha-em-grade", "início-linha-em-grade"],
            "grid-row-start",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", 'início-linha-em-grade', valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         validarValorNumerico("início-linha-em-grade", valores, this.valoresAceitos);
        //     }

        //     proibirQuantificador("início-linha-em-grade", quantificador);

        this.valores = valores;
    }
}
