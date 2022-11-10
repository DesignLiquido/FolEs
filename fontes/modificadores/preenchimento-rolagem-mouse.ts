import { Modificador } from "./superclasse/modificador";

export class PreenchimentoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-rolagem-mouse", "scroll-padding");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
