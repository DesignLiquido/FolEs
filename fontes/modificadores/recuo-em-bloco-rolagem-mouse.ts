import { Modificador } from "./superclasse/modificador";

export class RecuoEmBlocoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-bloco-rolagem-mouse", "scroll-padding-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
