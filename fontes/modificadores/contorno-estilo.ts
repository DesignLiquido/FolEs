import { Modificador } from "./superclasse/modificador";

export class ContornoEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contorno-estilo", "outline-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
