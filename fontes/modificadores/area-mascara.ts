import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";

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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["area-mascara", "área-máscara"], "mask-clip", pragmas);

        if (!valorVariavel) {
            if (valor.includes(",")) {
                validarAtribuicaoAbreviada("comum", "área-máscara", valor, this.valoresAceitos)
            } else {
                validarValores("área-máscara", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
