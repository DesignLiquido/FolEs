import { Modificador } from "./superclasse/modificador";

export class Flexeduzir extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex-reduzir", "flex-shrink");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
