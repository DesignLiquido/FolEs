import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoCaixa extends Modificador {
    static nomeFolEs: string = "tamanho-caixa";
    static nomeCss: string = "box-sizing";
    static descricao: string = 'Define como a largura e a altura totais de um elemento são calculadas.';
    static documentacao: string = '# `tamanho-caixa`\nQuando você define a largura/altura de um elemento, o elemento geralmente parece maior do que o definido, porque a borda e o preenchimento do elemento são adicionados à largura/altura especificada do elemento. A propriedade `tamanho-caixa` resolve esse problema';
    static exemploCodigo: string = 'divisao {\n  tamanho-caixa: conteúdo-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoCaixa.nomeFolEs, TamanhoCaixa.nomeCss, pragmas);

        if (!variavel) validarValores(TamanhoCaixa.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
