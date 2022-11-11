import { Modificador } from "./superclasse/modificador";

export class AlinharEncaixeRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
