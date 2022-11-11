import { Modificador } from "./superclasse/modificador";

export class RecuoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-linha", "padding-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
