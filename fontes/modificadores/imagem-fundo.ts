import { Modificador } from "./superclasse/modificador";

export class ImagemFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("imagem-fundo", "background-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
