import { Modificador } from "./superclasse/modificador";

export class InicioColunaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-coluna-em-grade", "início-coluna-em-grade"], 
            "grid-column-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
