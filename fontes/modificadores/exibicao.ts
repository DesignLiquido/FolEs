import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Exibicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "em-bloco": "block",
        "em-linha": "inline",
        "fluxo": "flow",
        "fluxo-raiz": "flow-root",
        "tabela": "table",
        "flex": "flex",
        "em-grade": "grid",
        "rubi": "ruby",
        "rubí": "ruby",
        "item-lista": "list-item",
        "conteudo": "contents",
        "conteúdo": "contents",
        "nenhuma": "none",
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
    }

    constructor(valor: string, quantificador?: string) {
        super(["exibicao", "exibição"], "display");

        // OBS.: Também pode receber múltiplos valores.
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'exibição' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
