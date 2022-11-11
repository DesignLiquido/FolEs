import { Modificador } from "./superclasse/modificador";

export class ComportamentoEmBlocoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-em-bloco-rolagem-mouse", "overscroll-behavior-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
