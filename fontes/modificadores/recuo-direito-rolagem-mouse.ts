import { Modificador } from "./superclasse/modificador";

export class RecuoDireitoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-direito-rolagem-mouse", "scroll-padding-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
