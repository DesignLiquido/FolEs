import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

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

        // TODO: Adaptar validação AA para proibir quantificador
        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                'início-linha-em-grade',
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
            // TODO: Recebia validacaoPersonalizada como true
        } else {
            validarValorNumerico(
                "início-linha-em-grade",
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
