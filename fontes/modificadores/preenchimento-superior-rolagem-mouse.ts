import { Modificador } from "./superclasse/modificador";

export class PreenchimentoSuperiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-superior-rolagem-mouse", "scroll-padding-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
