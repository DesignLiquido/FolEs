import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class AreaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
        borda: "border",
        preenchimento: "padding",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        texto: "text",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["area-mascara", "área-máscara"], "mask-clip", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum",
                "área-máscara",
                valores,
                this.valoresAceitos
            );
        } else {
            validarValores(
                "área-máscara",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
