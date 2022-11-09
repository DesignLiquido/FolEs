import { Modificador } from "./superclasse/modificador";

export class TamanhoMaximoEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-maximo-em-bloco", "tamanho-máximo-em-bloco"], 
            "max-block-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
