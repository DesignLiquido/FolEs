import { Modificador } from "./superclasse/modificador";

export class OrientacaoImagem extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["orientacao-imagem", "orientação-imagem"], "image-orientation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
