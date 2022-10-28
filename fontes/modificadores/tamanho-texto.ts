import { Modificador } from "./superclasse/modificador";

export class TamanhoTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-texto", "font-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}