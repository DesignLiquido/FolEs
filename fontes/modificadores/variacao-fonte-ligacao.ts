import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteLigacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-ligacao", "variação-fonte-ligação"], 
            "font-variant-ligatures"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
