import { Valor } from "../valores";
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
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("ajustar-tamanho-fonte", "font-size-adjust", pragmas);

        // TODO: Repensar.
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "ajustar-tamanho-fonte", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico(
        //             "ajustar-tamanho-fonte",
        //             valor,
        //             this.valoresAceitos,
        //         );
        //     }

        this.valores = valores;

        // Por enquanto trabalhando apenas com o primeiro valor.
        if (this.valores.length > 0 && this.valores[0].hasOwnProperty('quantificador')) {
            const quantificador = (this.valores[0] as any).quantificador;
            // Não recebe quantificador, apenas o valor numérico.
            if (quantificador) proibirQuantificador("ajustar-tamanho-fonte", quantificador);
        }
    }
}
