import { Modificador } from "./superclasse/modificador";

export class Conter extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("conter", "contain");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
