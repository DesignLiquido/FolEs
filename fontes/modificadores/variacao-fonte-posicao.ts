import { Modificador } from "./superclasse/modificador";

export class VariacaoFontePosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-posicao", "variação-fonte-posição"], 
            "font-variant-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
