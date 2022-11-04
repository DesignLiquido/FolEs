import { Modificador } from "./superclasse/modificador";

export class EstenderImagemBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estender-imagem-borda", "border-image-outset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
