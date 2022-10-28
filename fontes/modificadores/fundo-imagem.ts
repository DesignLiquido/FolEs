import { Modificador } from "./superclasse/modificador";

export class FundoImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-imagem", "background-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
