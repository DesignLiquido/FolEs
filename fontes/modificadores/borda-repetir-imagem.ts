import { Modificador } from "./superclasse/modificador";

export class BordaRepetirImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-repetir-imagem", "border-image-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
