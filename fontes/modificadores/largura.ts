import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Largura extends Modificador {
    static nomeFolEs: string = "largura";
    static nomeCss: string = "width";
    static descricao: string = 'Define a largura de um elemento da aplicação.';
    static documentacao: string = '# `largura`\nPor padrão, esta propriedade define a largura da área de conteúdo, mas se o valor da propriedade `tamanho-caixa` for definido como `borda-caixa`, essa propriedade passa a definir a largura da área de borda de um elemento.';
    static exemploCodigo: string = 'divisão {\n  largura: 300px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Largura.nomeFolEs, Largura.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                Largura.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
