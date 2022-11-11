import { Modificador } from "./superclasse/modificador";

export class MargemEmBlocoFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-bloco-fim", "margin-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
