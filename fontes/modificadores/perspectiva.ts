import { Modificador } from "./superclasse/modificador";

export class Perspectiva extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("perspectiva", "perspective");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
