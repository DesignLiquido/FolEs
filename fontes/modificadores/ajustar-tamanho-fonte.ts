import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("ajustar-tamanho-fonte", "font-size-adjust", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "ajustar-tamanho-fonte", valor, this.valoresAceitos);
            } else {
                validarValorNumerico(
                    "ajustar-tamanho-fonte",
                    valor,
                    this.valoresAceitos,
                );
            }
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        if (quantificador) proibirQuantificador("ajustar-tamanho-fonte", quantificador);
    }
}
