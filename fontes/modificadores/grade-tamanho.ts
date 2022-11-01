import { Modificador } from "./superclasse/modificador";

export class GradeTamanho extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-tamanho", "grid-area");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
