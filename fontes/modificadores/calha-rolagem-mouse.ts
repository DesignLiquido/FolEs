import { Modificador } from "./superclasse/modificador";

export class CalhaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("calha-rolagem-mouse", "scrollbar-gutter");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
