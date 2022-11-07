import { Modificador } from "./superclasse/modificador";

export class EspacamentoEmGrade extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["espacamento-em-grade", "espaçamento-em-grade"], 
            "grid-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
