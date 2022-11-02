import { Modificador } from "./superclasse/modificador";

export class Preenchimento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento", "padding");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
