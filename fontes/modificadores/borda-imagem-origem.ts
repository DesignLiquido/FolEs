import { Modificador } from "./modificador";

export class BordaImagemOrigem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-imagem-origem", "border-image-source");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
