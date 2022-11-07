import { Modificador } from "./superclasse/modificador";

export class DecorarLinhaTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("decorar-linha-texto", "text-decoration-line");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
