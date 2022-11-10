import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmLinhaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-linha-rolagem-mouse", "scroll-padding-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
