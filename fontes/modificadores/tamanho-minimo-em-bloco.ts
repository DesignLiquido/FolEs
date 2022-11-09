import { Modificador } from "./superclasse/modificador";

export class TamanhoMinimoEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-minimo-em-bloco", "tamanho-mínimo-em-bloco"], 
            "min-block-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
