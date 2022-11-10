import { Modificador } from "./superclasse/modificador";

export class RecuoSuperiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-superior-rolagem-mouse", "scroll-padding-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
