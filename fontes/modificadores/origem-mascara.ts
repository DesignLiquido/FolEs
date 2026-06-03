import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemMascara extends Modificador {
    static nomeFolEs: string[] = ["origem-mascara", "origem-máscara"];
    static nomeCss: string = "mask-origin";
    static descricao: string = 'Define a origem de uma máscara.';
    static documentacao: string = '# `origem-mascara`\nPara elementos renderizados como uma única caixa, esta propriedade especifica a área de posicionamento da máscara. Para elementos renderizados como caixas múltiplas, como caixas embutidas em diversas linhas ou caixas em diversas páginas`.';
    static exemploCodigo: string = 'divisao {\n  origem-mascara: delimitar-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        preenchimento: "padding",
        borda: "border",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(OrigemMascara.nomeFolEs, OrigemMascara.nomeCss, pragmas);

        if (!variavel) validarValores(OrigemMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
