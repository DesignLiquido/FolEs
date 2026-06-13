import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FlexComprimento extends Modificador {
    static nomeFolEs: string = "flex-comprimento";
    static nomeCss: string = "flex-basis";
    static descricao: string = 'Define o tamanho inicial de um item com exibição do tipo flex.';
    static documentacao: string = '# `flex-comprimento`\nAlém do tamanho inicial do item, esta propriedade define também o tamanho da caixa de conteúdo, a menos que esse seja definido com a propriedade `tamanho-caixa`.';
    static exemploCodigo: string = 'divisao {\n  flex-comprimento: 10em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "ajustar-conteudo": "fit-content",
        "ajustar-conteúdo": "fit-content",
        conteudo: "content",
        conteúdo: "content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FlexComprimento.nomeFolEs, FlexComprimento.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                FlexComprimento.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
