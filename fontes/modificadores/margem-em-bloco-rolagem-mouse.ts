import { Modificador } from "./superclasse/modificador";

export class MargemEmBlocoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-bloco-rolagem-mouse", "scroll-margin-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
