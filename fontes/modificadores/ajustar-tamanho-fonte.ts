import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class AjustarTamanhoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "altura-ex": "ex-height",
        "altura-cap": "cap-height",
        "largura-ch": "ch-width",
        "largura-ic": "ic-width",
        "altura-ic": "ic-height",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("ajustar-tamanho-fonte", "font-size-adjust", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "ajustar-tamanho-fonte",
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        } else {
            validarValorNumerico(
                "ajustar-tamanho-fonte",
                valores,
                this.valoresAceitos,
                null,
                null,
                null,
                true,
            );
        }

        this.valores = valores;
    }
}
