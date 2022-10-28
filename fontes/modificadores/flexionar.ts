import { Modificador } from "./superclasse/modificador";

export class Flexionar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar", "flex");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
