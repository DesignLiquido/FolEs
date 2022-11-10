import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmBlocoRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-bloco-rolagem-mouse", "scroll-padding-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
