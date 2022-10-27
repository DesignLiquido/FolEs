import { Modificador } from "./modificador";

export class BordaImagemRepetir extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem-repetir", "border-image-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
