import { Modificador } from "./superclasse/modificador";

export class MargemInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-inferior-rolagem-mouse", "scroll-margin-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
