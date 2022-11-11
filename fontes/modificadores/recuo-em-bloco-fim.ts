import { Modificador } from "./superclasse/modificador";

export class RecuoEmBlocoFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-bloco-fim", "padding-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
