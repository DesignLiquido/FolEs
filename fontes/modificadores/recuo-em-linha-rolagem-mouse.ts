import { Modificador } from "./superclasse/modificador";

export class RecuoEmLinhaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-linha-rolagem-mouse", "scroll-padding-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
