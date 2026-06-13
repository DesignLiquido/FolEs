import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class AjustarTamanhoFonte extends Modificador {
    static nomeFolEs: string = "ajustar-tamanho-fonte";
    static nomeCss: string = "font-size-adjust";
    static descricao: string = 'Estiliza o tamanho das letras minúsculas da aplicação.';
    static documentacao: string = '# `ajustar-tamanho-fonte`\nUm valor numérico será sempre relativo ao valor especificado na propriedade tamanho-fonte, que define o tamanho das letras maiúsculas.'
    static exemploCodigo: string = 'p {\n  ajustar-tamanho-fonte: 0.5;\n}';

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
        variavel?: boolean
    ) {
        super(AjustarTamanhoFonte.nomeFolEs, AjustarTamanhoFonte.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    AjustarTamanhoFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true
                );
            } else {
                validarValorNumerico(
                    AjustarTamanhoFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    true,
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
