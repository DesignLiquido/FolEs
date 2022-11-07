import { Modificador } from "./superclasse/modificador";

export class DecorarTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("decorar-texto", "text-decoration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
