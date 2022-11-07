import { Modificador } from "./superclasse/modificador";

export class Recortar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recortar", "clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
