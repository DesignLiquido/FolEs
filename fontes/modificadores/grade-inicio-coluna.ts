import { Modificador } from "./superclasse/modificador";

export class GradeInicioColuna extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["grade-inicio-coluna", "grade-início-coluna"], "grid-column-start");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
