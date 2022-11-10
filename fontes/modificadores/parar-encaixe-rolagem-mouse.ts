import { Modificador } from "./superclasse/modificador";

export class PararEncaixeRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("parar-encaixe-rolagem-mouse", "scroll-snap-stop");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
