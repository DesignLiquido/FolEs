import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class Cor extends Modificador {
    static nomeFolEs: string = "cor";
    static nomeCss: string = "color";
    static descricao: string = 'Define o valor da cor de primeiro plano do texto e das decorações de texto de um elemento.';
    static documentacao: string = '# `cor`\nPropriedade utilizado para definir as cores dos elementos da aplicação.';
    static exemploCodigo: string = 'título2 {\n  cor: vermelho;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Cor.nomeFolEs, Cor.nomeCss, pragmas);

        if (!variavel) validarValorCor(Cor.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
