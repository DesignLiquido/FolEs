import { Modificador } from "./superclasse/modificador";

export class Girar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("girar", "rotate");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
