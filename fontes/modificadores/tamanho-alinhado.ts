import { Modificador } from "./superclasse/modificador";

export class TamanhoAlinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-alinhado", "inline-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
