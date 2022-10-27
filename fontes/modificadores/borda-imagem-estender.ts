import { Modificador } from "./modificador";

export class BordaImagemEstender extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem-estender", "border-image-outset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
