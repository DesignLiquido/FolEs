import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoAlternativa extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-alternativa", "fonte-variação-alternativa"], 
            "font-variant-alternates"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
