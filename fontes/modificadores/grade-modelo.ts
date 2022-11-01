import { Modificador } from "./superclasse/modificador";

export class GradeModelo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-modelo", "grid-template");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
