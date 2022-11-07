import { Modificador } from "./superclasse/modificador";

export class RecuoDireito extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-direito", "padding-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
