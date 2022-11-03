import { Modificador } from "./superclasse/modificador";

export class OrdenarElemento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ordenar-elemento", "z-index");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
