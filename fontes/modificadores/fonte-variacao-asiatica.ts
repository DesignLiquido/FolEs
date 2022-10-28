import { Modificador } from "./superclasse/modificador";

export class FonteVariacaoAsiatica extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["fonte-variacao-asiatica", "fonte-variação-asiática"], 
            "font-variant-east-asian"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
