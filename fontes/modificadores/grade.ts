import { Modificador } from "./superclasse/modificador";

export class Grade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade", "grid");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
