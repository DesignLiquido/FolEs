import { Modificador } from "./superclasse/modificador";

export class ComportamentoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-rolagem-mouse", "overscroll-behavior");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
