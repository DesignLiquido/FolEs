import { Modificador } from "./superclasse/modificador";

export class EstiloLista extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-lista", "list-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
