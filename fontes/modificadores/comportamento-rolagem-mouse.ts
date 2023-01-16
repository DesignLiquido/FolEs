import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ComportamentoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "contem": "contain",
        "contém": "contain",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("comportamento-rolagem-mouse", "overscroll-behavior");

        // Modificador também pode servir como shorthand (atribuição abreviada) para:
        // 1. comportamento-horizontal-rolagem-mouse
        // 2. comportamento-vertical-rolagem-mouse

        // Ex.: comportamento-rolagem-mouse: auto contém;

        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica quando trabalhar com os valores de atribuição abreviada.
        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'comportamento-rolagem-mouse' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
