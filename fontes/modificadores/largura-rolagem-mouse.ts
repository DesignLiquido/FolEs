import { Modificador } from "./superclasse/modificador";

export class LarguraRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-rolagem-mouse", "scrollbar-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
