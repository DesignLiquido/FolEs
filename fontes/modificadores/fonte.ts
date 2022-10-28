import { Modificador } from "./superclasse/modificador";

export class Fonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte", "font");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
