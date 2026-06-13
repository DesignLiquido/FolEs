import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Direcao extends Modificador {
    static nomeFolEs: string[] = ["direcao", "direção"];
    static nomeCss: string = "direction";
    static descricao: string = 'Define a direção do texto, das colunas de uma tabela ou de um conteúdo vazado na direção horizontal.';
    static documentacao: string = '# `direção`\nO valor direita-esquerda se aplica aos idiomas escritos da direita para a esquerda (como hebraico ou árabe).Já o valor esquerda-direita, para aqueles escritos da esquerda para a direita (como o inglês e a maioria dos outros idiomas).';
    static exemploCodigo: string = 'p {\n  direção: direita-esquerda;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda-direita": "ltr",
        "direita-esquerda": "rtl",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Direcao.nomeFolEs, Direcao.nomeCss, pragmas);

        if (!variavel) validarValores(Direcao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
