import { Modificador } from "./superclasse/modificador";

export class GradeEspacamento extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["grade-espacamento", "grade-espaçamento"], 
            "grid-gap"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
