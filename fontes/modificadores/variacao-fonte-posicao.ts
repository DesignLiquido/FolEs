import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFontePosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        subscrito: "sub",
        sobrescrito: "super",
    };

    static nomeCss: string = "font-variant-position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"],
            VariacaoFontePosicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "variação-fonte-posição",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
