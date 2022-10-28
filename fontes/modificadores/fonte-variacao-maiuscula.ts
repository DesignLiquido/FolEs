import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoMaiuscula extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-maiuscula", "fonte-variação-maiúscula"], 
            "font-variant-caps"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
