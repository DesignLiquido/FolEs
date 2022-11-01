import { Modificador } from "./superclasse/modificador";

export class ListaEstiloTipo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("lista-estilo-tipo", "list-style-type");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
