import { Modificador } from "./superclasse/modificador";

export class GradeTamanhoLinhas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-tamanho-linhas", "grid-auto-rows");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
