import { Modificador } from "./superclasse/modificador";

export class Isolar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("isolar", "isolation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
