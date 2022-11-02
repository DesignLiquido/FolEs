import { Modificador } from "./superclasse/modificador";

export class PreenchimentoDireito extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-direito", "padding-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
