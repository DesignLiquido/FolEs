import { Modificador } from "./superclasse/modificador";

export class ComportamentoEmLinhaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("comportamento-em-linha-rolagem-mouse", "overscroll-behavior-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
