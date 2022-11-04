import { Modificador } from "./superclasse/modificador";

export class FatiarImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fatiar-imagem-borda", "border-image-slice");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
