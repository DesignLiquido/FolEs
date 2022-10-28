import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoNumerica extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-numerica", "fonte-variação-numérica"], 
            "font-variant-numeric"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
