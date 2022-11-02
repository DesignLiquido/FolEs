import { Modificador } from "./superclasse/modificador";

export class Selecionar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("selecionar", "user-select");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
