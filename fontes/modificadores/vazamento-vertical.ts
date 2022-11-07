import { Modificador } from "./superclasse/modificador";

export class VazamentoVertical extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-vertical", "overflow-y");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
