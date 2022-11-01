import { Modificador } from "./superclasse/modificador";

export class GradeEspacamentoColuna extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["grade-espacamento-coluna", "grade-espaçamento-coluna"], 
            "grid-column-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
