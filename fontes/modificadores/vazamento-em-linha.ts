import { Modificador } from "./superclasse/modificador";

export class VazamentoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-em-linha", "overflow-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
