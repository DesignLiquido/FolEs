import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";
import { validarValorString } from "./validacoes/string";

export class ConfiguracoesVariacaoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"],
            "font-variation-settings",
            pragmas,
        );

        if (!valorVariavel) {
            const validacaoString = validarValorString(valor);

            if (validacaoString) {
                this.valoresAceitos[valor] = valor;
            }

            validarValorNumerico(
                "configurações-variação-fonte",
                valor,
                this.valoresAceitos,
            );

            // Não recebe quantificador
            proibirQuantificador("configurações-variação-fonte", quantificador);
        }

        this.valor = valor;
    }
}
