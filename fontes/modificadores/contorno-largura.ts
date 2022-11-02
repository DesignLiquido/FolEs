import { Modificador } from "./superclasse/modificador";

export class ContornoLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contorno-largura", "outline-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
