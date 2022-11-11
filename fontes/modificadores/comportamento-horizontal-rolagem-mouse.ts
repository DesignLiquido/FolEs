import { Modificador } from "./superclasse/modificador";

export class ComportamentoHorizontalRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-horizontal-rolagem-mouse", "overscroll-behavior-x");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
