import { Modificador } from "./superclasse/modificador";

export class EstiloListaTipo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-lista-tipo", "list-style-type");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
