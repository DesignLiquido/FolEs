import { Modificador } from "./superclasse/modificador";

export class CorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-rolagem-mouse", "scrollbar-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
