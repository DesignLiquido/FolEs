import { Modificador } from "./superclasse/modificador";

export class BordaImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem", "border-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
