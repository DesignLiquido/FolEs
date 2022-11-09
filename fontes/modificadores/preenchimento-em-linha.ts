import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-linha", "padding-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
