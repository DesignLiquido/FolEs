import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecortarFundo extends Modificador {
    static nomeFolEs: string = "recortar-fundo";
    static nomeCss: string = "background-clip";
    static descricao: string = 'Define a extensão do plano de fundo.';
    static documentacao: string = '# `recortar-fundo`\nPropriedade que especifica se o plano de fundo de um elemento se estende abaixo de sua caixa de borda, de sua caixa de preenchimento ou de sua caixa de conteúdo.';
    static exemploCodigo: string = 'p {\n  recortar-fundo: preenchimento;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        borda: "border-box",
        preenchimento: "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        texto: "text",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecortarFundo.nomeFolEs, RecortarFundo.nomeCss, pragmas);

        if (!variavel) validarValores(RecortarFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
