import { Modificador } from "./superclasse/modificador";

export class DecorarCorTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("decorar-cor-texto", "text-decoration-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
