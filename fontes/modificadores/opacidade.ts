import { Modificador } from "./superclasse/modificador";

export class Opacidade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("opacidade", "opacity");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
