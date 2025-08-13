import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFontePosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        subscrito: "sub",
        sobrescrito: "super",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"],
            "font-variant-position",
            pragmas,
        );

        validarValores(
            "variação-fonte-posição",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
