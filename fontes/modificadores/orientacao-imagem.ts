import { Modificador } from "./superclasse/modificador";

export class OrientacaoImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["orientacao-imagem", "orientação-imagem"], 
            "image-orientation"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
