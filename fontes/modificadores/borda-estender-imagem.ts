import { Modificador } from "./superclasse/modificador";

export class BordaEstenderImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-estender-imagem", "border-image-outset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
