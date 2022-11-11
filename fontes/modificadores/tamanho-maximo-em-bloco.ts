import { Modificador } from "./superclasse/modificador";

export class TamanhoMaximoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-maximo-em-bloco", "tamanho-máximo-em-bloco"], 
            "max-block-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
