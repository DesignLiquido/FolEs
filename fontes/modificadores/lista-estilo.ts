import { Modificador } from "./superclasse/modificador";

export class ListaEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("lista-estilo", "list-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
