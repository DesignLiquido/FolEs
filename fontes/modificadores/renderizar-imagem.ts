import { Modificador } from "./superclasse/modificador";

export class RenderizarImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("renderizar-imagem", "image-rendering");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
