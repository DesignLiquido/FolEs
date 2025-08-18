import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

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

        // TODO: Adaptar validação AA para proibir quantificador
        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                'início-coluna-em-grade',
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
            // TODO: Recebe validacaoPersonalizada como true
        } else {
            validarValorNumerico(
                "início-coluna-em-grade",
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
