import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteMaiuscula extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-maiuscula", "variação-fonte-maiúscula"], 
            "font-variant-caps"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
