import { Modificador } from "./superclasse/modificador";

export class GradeEspacamentoLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["grade-espacamento-linha", "grade-espaçamento-linha"], 
            "grid-row-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
