import { Modificador } from "./superclasse/modificador";

export class BordaImagemLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem-largura", "border-image-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
 