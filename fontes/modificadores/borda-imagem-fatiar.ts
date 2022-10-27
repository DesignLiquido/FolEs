import { Modificador } from "./modificador";

export class BordaImagemFatiar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem-fatiar", "border-image-slice");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
