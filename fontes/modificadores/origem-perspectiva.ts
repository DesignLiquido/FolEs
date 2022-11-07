import { Modificador } from "./superclasse/modificador";

export class OrigemPerspectiva extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("origem-perspectiva", "perspective-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
