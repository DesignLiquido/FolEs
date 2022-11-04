import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteMaiuscula extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-maiuscula", "variação-fonte-maiúscula"], 
            "font-variant-caps"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
