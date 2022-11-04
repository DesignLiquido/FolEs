import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteLigacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-ligacao", "variação-fonte-ligação"], 
            "font-variant-ligatures"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
