import { Modificador } from "./superclasse/modificador";

export class FonteEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-estilo", "font-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
