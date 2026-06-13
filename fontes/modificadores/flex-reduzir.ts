import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexReduzir extends Modificador {
    static nomeFolEs: string = "flex-reduzir";
    static nomeCss: string = "flex-shrink";
    static descricao: string = 'Define o fator de redução de um item com exibição do tipo flex.';
    static documentacao: string = '# `flex-reduzir`\nAo utilizar esta propriedade, entenda que se o tamanho de todos os itens flexíveis for maior que o contêiner, os itens encolherão para caber de acordo com o valor especificado.';
    static exemploCodigo: string = 'divisao {\n  flex-reduzir: 0.6;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flex-reduzir", FlexReduzir.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "flex-reduzir",
                valores,
                null,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
