import { Valor, ValorNumerico } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarValorString } from "./validacoes/string";

export class ConfiguracoesVariacaoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"],
            "font-variation-settings",
            pragmas,
        );

        // const valorTipado = valores[0] as ValorNumerico;
        // const validacaoString = validarValorString(valorTipado.literalNumerico);

        // if (validacaoString) {
        //     this.valoresAceitos[valor] = valor;
        // }

        validarValorNumerico(
            "configurações-variação-fonte",
            valores,
            this.valoresAceitos,
            null,
            null,
            true,
        );

        this.valores = valores;
    }
}
