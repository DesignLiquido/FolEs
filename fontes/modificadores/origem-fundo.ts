import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemFundo extends Modificador {
    static nomeFolEs: string = "origem-fundo";
    static nomeCss: string = "background-origin";
    static descricao: string = 'Define a origem do plano de fundo: do início da borda, dentro da borda ou dentro do preenchimento.';
    static documentacao: string = '# `origem-fundo`\nO valor desta propriedade é ignorado quando a propriedade `fixar-fundo` recebe o valor `fixo`.';
    static exemploCodigo: string = 'corpo {\n  origem-fundo: borda-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "borda-caixa": "border-box",
        preenchimento: "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(OrigemFundo.nomeFolEs, OrigemFundo.nomeCss, pragmas);

        if (!variavel) validarValores(OrigemFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
