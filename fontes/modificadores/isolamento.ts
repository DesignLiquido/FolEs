import { Modificador } from "./superclasse/modificador";

export class Isolamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("isolamento", "isolation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
