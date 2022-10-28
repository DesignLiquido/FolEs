import { Modificador } from "./superclasse/modificador";

export class FonteTamanho extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-tamanho", "font-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}