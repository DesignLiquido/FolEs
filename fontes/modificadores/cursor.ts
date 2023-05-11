import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Cursor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "padrao": "default",
        "padrão": "default",
        "exibir-menu": "context-menu",
        "exibir-ajuda": "help",
        "indicador": "pointer",
        "em-progresso": "progress",
        "carregando": "wait",
        "estilo": "cell",
        "pintar": "crosshair",
        "texto": "text",
        "texto-vertical": "vertical-text",
        "atalho": "alias",
        "copiar": "copy",
        "mover": "move",
        "proibido-soltar": "no-drop",
        "proibido": "not-allowed",
        "arrastar": "grab",
        "arrastando": "grabbing",
        "rolar-tudo": "all-scroll",
        "ajustar-coluna": "col-resize",
        "ajustar-linha": "row-resize",
        "para-cima": "n-resize",
        "para-esquerda": "e-resize",
        "para-baixo": "s-resize",
        "para-direita": "w-resize",
        "para-esquerda-superior": "ne-resize",
        "para-direita-superior": "nw-resize",
        "para-esquerda-inferior": "se-resize",
        "para-direita-inferior": "sw-resize",
        "esquerda-direita": "ew-resize",
        "cima-baixo": "ns-resize",
        "diagonal-direita": "nesw-resize",
        "diagonal-esquerda": "nwse-resize",
        "aproximar": "zoom-in",
        "afastar": "zoom-out",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("cursor", "cursor");

        // OBS.: Também pode receber:
        // 1. Um link externo de uma imagem (URL);
        // 2. Coordenadas x e y que definem o ponto de partida do cursor.

        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados.
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'cursor' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
