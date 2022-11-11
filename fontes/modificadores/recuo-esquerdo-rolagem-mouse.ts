import { Modificador } from "./superclasse/modificador";

export class RecuoEsquerdoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-esquerdo-rolagem-mouse", "scroll-padding-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
