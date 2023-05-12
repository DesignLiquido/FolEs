import { Modificador, PragmasModificador } from "./superclasse";

export class ModeloGeralEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modelo-geral-em-grade", "grid-template-areas");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
