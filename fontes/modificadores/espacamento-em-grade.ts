import { Modificador } from "./superclasse/modificador";

export class EspacamentoEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["espacamento-em-grade", "espaçamento-em-grade"], 
            "grid-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
