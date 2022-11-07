import { Modificador } from "./superclasse/modificador";

export class Escala extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("escala", "scale");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
