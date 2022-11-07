import { Modificador } from "./superclasse/modificador";

export class Redimensionar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("redimensionar", "resize");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
