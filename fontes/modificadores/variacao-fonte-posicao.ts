import { Modificador } from "./superclasse/modificador";

export class VariacaoFontePosicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"], 
            "font-variant-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
