import { Modificador } from "./superclasse/modificador";

export class GradeTamanhoColunas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-tamanho-colunas", "grid-auto-columns");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
