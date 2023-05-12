import { Modificador, PragmasModificador } from "./superclasse";

export class ImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("imagem-borda", "border-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
