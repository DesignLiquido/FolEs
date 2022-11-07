import { Modificador } from "./superclasse/modificador";

export class EspacamentoColunaEmGrade extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["espacamento-coluna-em-grade", "espaçamento-coluna-em-grade"], 
            "grid-column-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
