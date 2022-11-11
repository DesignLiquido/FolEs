import { Modificador } from "./superclasse/modificador";

export class TipoEncaixeRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tipo-encaixe-rolagem-mouse", "scroll-snap-type");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
