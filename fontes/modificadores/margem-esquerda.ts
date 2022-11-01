import { Modificador } from "./superclasse/modificador";

export class MargemEsquerda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-esquerda", "margin-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
