import { Modificador } from "./superclasse/modificador";

export class VazamentoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento-em-bloco", "overflow-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
