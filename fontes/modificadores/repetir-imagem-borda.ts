import { Modificador } from "./superclasse/modificador";

export class RepetirImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("repetir-imagem-borda", "border-image-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
