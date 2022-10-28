import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoLigacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-ligacao", "fonte-variação-ligação"], 
            "font-variant-ligatures"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
