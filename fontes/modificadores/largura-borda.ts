import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBorda extends Modificador {
    static nomeFolEs: string = "largura-borda";
    static nomeCss: string = "border-width";
    static descricao: string = 'Define a largura da borda de um elemento da aplicação.';
    static documentacao: string = '# `largura-borda`\nPropriedade de atribuição abreviada para definir a largura dos quatro lados de um elemento utilizando apenas uma propriedade.';
    static exemploCodigo: string = 'divisão {\n  largura-borda: espessa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraBorda.nomeFolEs, LarguraBorda.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    LarguraBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            } else {
                validarValorNumerico(
                    LarguraBorda.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
