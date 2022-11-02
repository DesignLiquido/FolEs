import { Modificador } from "./superclasse/modificador";

export class VazamentoHorizontal extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-horizontal", "overflow-x");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
