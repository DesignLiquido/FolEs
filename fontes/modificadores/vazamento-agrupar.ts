import { Modificador } from "./superclasse/modificador";

export class VazamentoAgrupar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-agrupar", "overflow-wrap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
