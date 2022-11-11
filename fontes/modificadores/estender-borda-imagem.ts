import { Modificador } from "./superclasse/modificador";

export class EstenderBordaImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estender-borda-imagem", "border-image-outset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
