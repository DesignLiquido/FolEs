import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Exibicao extends Modificador {
    static nomeFolEs: string[] = ["exibicao", "exibição"];
    static nomeCss: string = "display";
    static descricao: string = 'Define se um elemento é tratado como sendo em bloco ou em linha e define também o layout usado para seus elementos filhos.';
    static documentacao: string = '# `exibicao`\nFormalmente, esta propriedade define os tipos de exibição interna e externa de um elemento. O tipo externo define a participação de um elemento no layout de fluxo; o tipo interno define o layout dos elementos filhos.';
    static exemploCodigo: string = 'p {\n  exibicao: em-bloco;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "em-bloco": "block",
        "em-linha": "inline",
        "fluxo-comum": "flow",
        "fluxo-raiz": "flow-root",
        tabela: "table",
        flex: "flex",
        "em-grade": "grid",
        rubi: "ruby",
        rubí: "ruby",
        "item-lista": "list-item",
        "conteudo-caixa": "contents",
        "conteúdo-caixa": "contents",
        nenhuma: "none",
        "bloco-em-linha": "inline-block",
        "tabela-em-linha": "inline-table",
        "flex-em-linha": "inline-flex",
        "grade-em-linha": "inline-grid",
        "grupo-linhas-tabela": "table-row-group",
        "grupo-cabecalho-tabela": "table-header-group",
        "grupo-cabeçalho-tabela": "table-header-group",
        "grupo-rodape-tabela": "table-footer-group",
        "grupo-rodapé-tabela": "table-footer-group",
        "linha-tabela": "table-row",
        "celula-tabela": "table-cell",
        "célula-tabela": "table-cell",
        "grupo-colunas-tabela": "table-column-group",
        "coluna-tabela": "table-column",
        "legenda-tabela": "table-caption",
        "base-rubi": "ruby-base",
        "base-rubí": "ruby-base",
        "texto-rubi": "ruby-text",
        "texto-rubí": "ruby-text",
        "base-container-rubi": "ruby-base-container",
        "base-container-rubí": "ruby-base-container",
        "texto-container-rubi": "ruby-text-container",
        "texto-container-rubí": "ruby-text-container",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Exibicao.nomeFolEs, Exibicao.nomeCss, pragmas);

        if (!variavel) validarValores(Exibicao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
