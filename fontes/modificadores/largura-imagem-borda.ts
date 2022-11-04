import { Modificador } from "./superclasse/modificador";

export class LarguraImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-imagem-borda", "border-image-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
 