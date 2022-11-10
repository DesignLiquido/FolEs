import { Modificador } from "./superclasse/modificador";

export class PreenchimentoDireitoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-direito-rolagem-mouse", "scroll-padding-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
