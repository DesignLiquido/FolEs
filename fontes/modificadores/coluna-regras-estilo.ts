import { Modificador } from "./superclasse/modificador";

export class ColunaRegrasEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-regras-estilo", "column-rules-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
