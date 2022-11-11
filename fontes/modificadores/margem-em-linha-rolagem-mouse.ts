import { Modificador } from "./superclasse/modificador";

export class MargemEmLinhaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-linha-rolagem-mouse", "scroll-margin-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
