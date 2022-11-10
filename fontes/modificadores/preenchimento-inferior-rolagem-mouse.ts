import { Modificador } from "./superclasse/modificador";

export class PreenchimentoInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-inferior-rolagem-mouse", "scroll-padding-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
