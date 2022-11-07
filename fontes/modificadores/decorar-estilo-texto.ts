import { Modificador } from "./superclasse/modificador";

export class DecorarEstiloTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("decorar-estilo-texto", "text-decoration-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
