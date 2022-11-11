import { Modificador } from "./superclasse/modificador";

export class TamanhoMinimoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-minimo-em-bloco", "tamanho-mínimo-em-bloco"], 
            "min-block-size"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
