import { Modificador } from "./superclasse/modificador";

export class RecuoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-rolagem-mouse", "scroll-padding");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
