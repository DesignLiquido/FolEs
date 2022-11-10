import { Modificador } from "./superclasse/modificador";

export class MargemRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-rolagem-mouse", "scroll-margin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
