import { Modificador } from "./superclasse/modificador";

export class MargemEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-linha-fim", "margin-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
