import { Modificador } from "./superclasse/modificador";

export class MargemEsquerdaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-esquerda-rolagem-mouse", "scroll-margin-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
