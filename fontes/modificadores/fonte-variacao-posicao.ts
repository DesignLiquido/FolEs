import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-posicao", "fonte-variação-posição"], 
            "font-variant-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
