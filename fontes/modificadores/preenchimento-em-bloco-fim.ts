import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmBlocoFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-bloco-fim", "padding-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
