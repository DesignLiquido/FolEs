import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEsquerdo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-esquerdo", "padding-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
