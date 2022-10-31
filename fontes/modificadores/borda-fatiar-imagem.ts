import { Modificador } from "./superclasse/modificador";

export class BordaFatiarImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-fatiar-imagem", "border-image-slice");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
