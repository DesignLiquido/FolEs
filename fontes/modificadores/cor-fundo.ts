import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFundo extends Modificador {
    static nomeFolEs: string = "cor-fundo";
    static nomeCss: string = "background-color";
    static descricao: string = 'Define a cor de fundo de um elemento.';
    static documentacao: string = '# `cor-fundo`\nAo utilizar esta propriedade, é importante garantir que a taxa de contraste entre a cor de fundo e a cor do texto colocado sobre ela seja alta o suficiente para que pessoas com problemas de visão subnormal possam ler o conteúdo da página.';
    static exemploCodigo: string = 'corpo {\n  cor-fundo: hsl(50 33% 25% / 0.75);\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorFundo.nomeFolEs, CorFundo.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorFundo.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
