import { Modificador } from "./superclasse/modificador";

export class RecuoInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-inferior-rolagem-mouse", "scroll-padding-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
