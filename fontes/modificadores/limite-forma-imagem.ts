import { Modificador } from "./superclasse/modificador";

export class LimiteFormaImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("limite-forma-imagem", "shape-image-threshold");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
