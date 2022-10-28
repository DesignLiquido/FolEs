import { Modificador } from "./superclasse/modificador";

export class Fluxo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fluxo", "clear");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
