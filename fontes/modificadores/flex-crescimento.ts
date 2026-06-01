import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexCrescimento extends Modificador {
    static nomeFolEs: string = "flex-crescimento";
    static nomeCss: string = "flex-grow";
    static descricao: string = 'Define o fator de crescimento de um item com exibição do tipo flex.';
    static documentacao: string = '# `flex-crescimento`\nO fator de crescimento especifica quanto do espaço restante do contêiner deve ser atribuído ao tamanho principal do item.';
    static exemploCodigo: string = 'divisao {\n  flex-crescimento: 0.6;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FlexCrescimento.nomeFolEs, FlexCrescimento.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                FlexCrescimento.nomeFolEs,
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
