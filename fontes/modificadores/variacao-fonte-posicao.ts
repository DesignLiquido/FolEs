import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFontePosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        subscrito: "sub",
        sobrescrito: "super",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"],
            "font-variant-position",
            pragmas,
        );

        if (!valorVariavel)
            validarValores(
                "variação-fonte-posição",
                valor,
                this.valoresAceitos,
            );

        this.valor = valor;
    }
}
