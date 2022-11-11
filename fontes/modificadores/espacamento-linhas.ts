import { Modificador } from "./superclasse/modificador";

export class EspacamentoLinhas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
