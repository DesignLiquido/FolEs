import { Modificador } from "./superclasse/modificador";

export class GradeLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-linha", "grid-row");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
