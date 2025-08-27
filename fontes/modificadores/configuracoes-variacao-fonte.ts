import { Valor, ValorNumerico } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ConfiguracoesVariacaoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"],
            "font-variation-settings",
            pragmas,
        );

        // TODO: Aceita valores string
        if (!variavel) {
            validarValorNumerico(
                "configurações-variação-fonte",
                valores,
                this.valoresAceitos,
                null,
                null,
                true,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
