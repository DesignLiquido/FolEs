import { Valor, ValorNumerico, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarValorString } from "./validacoes/string";

export class ConfiguracoesVariacaoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "font-variation-settings";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"],
            ConfiguracoesVariacaoFonte.nomeCss,
            pragmas,
        );

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) {
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
