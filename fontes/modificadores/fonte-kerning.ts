import { Modificador } from "./superclasse/modificador";

export class FonteKerning extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-kerning", "font-kerning");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
