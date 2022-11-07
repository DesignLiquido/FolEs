import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteAsiatica extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-asiatica", "variação-fonte-asiática"], 
            "font-variant-east-asian"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
