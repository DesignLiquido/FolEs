import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteLigacao extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-ligacao", "variação-fonte-ligação"];
    static nomeCss: string = "font-variant-ligatures";
    static descricao: string = 'Controla quais ligaduras e formas contextuais são usadas no conteúdo textual dos elementos aos quais ela se aplica.';
    static documentacao: string = '# `variacao-fonte-ligacao`\nO uso desta propriedade leva a formas mais harmonizadas no texto resultante.';
    static exemploCodigo: string = 'p {\n  variacao-fonte-ligacao: ligações-discretas;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        nenhuma: "none",
        "ligacoes-comuns": "common-ligatures",
        "ligações-comuns": "common-ligatures",
        "sem-ligacoes-comuns": "no-common-ligatures",
        "sem-ligações-comuns": "no-common-ligatures",
        "ligacoes-discretas": "discretionary-ligatures",
        "ligações-discretas": "discretionary-ligatures",
        "sem-ligacoes-discretas": "no-discretionary-ligatures",
        "sem-ligações-discretas": "no-discretionary-ligatures",
        "ligacoes-historicas": "historical-ligatures",
        "ligações-históricas": "historical-ligatures",
        "sem-ligacoes-historicas": "no-historical-ligatures",
        "sem-ligações-históricas": "no-historical-ligatures",
        contextual: "contextual",
        "nao-contextual": "no-contextual",
        "não-contextual": "no-contextual",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFonteLigacao.nomeFolEs,
            VariacaoFonteLigacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                VariacaoFonteLigacao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
