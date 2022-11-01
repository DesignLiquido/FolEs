import { Modificador } from "./superclasse/modificador";

export class GradeInicioLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["grade-inicio-linha", "grade-início-linha"], "grid-row-start");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
