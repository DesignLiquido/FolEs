import { Modificador } from "./superclasse/modificador";

export class EspacamentoColuna extends Modificador {

    constructor(valor: string, quantificador: string) {
        super(["espacamento-coluna", "espaçamento-coluna"], "column-gap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
