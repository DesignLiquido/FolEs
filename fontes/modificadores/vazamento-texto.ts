import { Modificador } from "./superclasse/modificador";

export class VazamentoTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-texto", "text-overflow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
