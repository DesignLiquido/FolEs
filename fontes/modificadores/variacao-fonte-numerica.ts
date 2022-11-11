import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteNumerica extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-numerica", "variação-fonte-numérica"], 
            "font-variant-numeric"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
