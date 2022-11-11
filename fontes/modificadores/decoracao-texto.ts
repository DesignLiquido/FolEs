import { Modificador } from "./superclasse/modificador";

export class DecoracaoTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["decoracao-texto", "decoração-texto"], "text-decoration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
