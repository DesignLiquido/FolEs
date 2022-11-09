import { Modificador } from "./superclasse/modificador";

export class TamanhoMinimoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-minimo-em-linha", "tamanho-mínimo-em-linha"], 
            "min-inline-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
