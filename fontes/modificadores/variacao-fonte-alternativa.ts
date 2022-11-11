import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteAlternativa extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"], 
            "font-variant-alternates"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
