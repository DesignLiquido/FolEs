import { Modificador } from "./superclasse/modificador";

export class ContarColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contar-coluna", "column-count");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
