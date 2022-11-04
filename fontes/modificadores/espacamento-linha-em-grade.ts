import { Modificador } from "./superclasse/modificador";

export class EspacamentoLinhaEmGrade extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["espacamento-linha-em-grade", "espaçamento-linha-em-grade"], 
            "grid-row-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
