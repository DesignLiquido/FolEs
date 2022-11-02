import { Modificador } from "./superclasse/modificador";

export class RolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("rolagem-mouse", "scroll-behavior");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
