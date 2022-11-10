import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEsquerdoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-esquerdo-rolagem-mouse", "scroll-padding-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
