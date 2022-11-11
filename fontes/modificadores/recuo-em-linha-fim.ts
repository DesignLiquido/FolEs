import { Modificador } from "./superclasse/modificador";

export class RecuoEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-linha-fim", "padding-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
