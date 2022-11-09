import { Modificador } from "./superclasse/modificador";

export class PreenchimentoEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preenchimento-em-linha-fim", "padding-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
