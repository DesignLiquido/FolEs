import { Modificador } from "./superclasse/modificador";

export class TamanhoMaximoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-maximo-em-linha", "tamanho-máximo-em-linha"], 
            "max-inline-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
