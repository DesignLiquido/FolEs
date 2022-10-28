import { Modificador } from "./superclasse/modificador";

export class ColunaRegrasLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-regras-largura", "column-rules-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
