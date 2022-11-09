import { Modificador } from "./superclasse/modificador";

export class ComportamentoVerticalRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-vertical-rolagem-mouse", "overscroll-behavior-y");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
