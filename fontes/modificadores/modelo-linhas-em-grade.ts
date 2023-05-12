import { Modificador, PragmasModificador } from "./superclasse";

export class ModeloLinhasEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modelo-linhas-em-grade", "grid-template-rows");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
