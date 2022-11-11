import { Modificador } from "./superclasse/modificador";

export class LarguraMinima extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["largura-minima", "largura-mínima"], "min-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
