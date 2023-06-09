import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("comportamento-rolagem-mouse", "overscroll-behavior");

        // Modificador também pode servir como shorthand (atribuição abreviada) para:
        // 1. comportamento-horizontal-rolagem-mouse
        // 2. comportamento-vertical-rolagem-mouse

        // Ex.: comportamento-rolagem-mouse: auto conter;

        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica quando trabalhar com os valores de atribuição abreviada.
        
        validarValores('comportamento-rolagem-mouse',valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
