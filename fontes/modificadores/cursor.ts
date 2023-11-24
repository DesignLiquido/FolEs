import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

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
        super("cursor", "cursor", pragmas);

        const valoresExtra = ['url'];

        validarValores('cursor', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
