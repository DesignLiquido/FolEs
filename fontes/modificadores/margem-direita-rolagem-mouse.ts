import { Modificador } from "./superclasse/modificador";

export class MargemDireitaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-direita-rolagem-mouse", "scroll-margin-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
