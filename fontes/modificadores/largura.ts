import { Modificador } from "./superclasse/modificador";

export class Largura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura", "width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
