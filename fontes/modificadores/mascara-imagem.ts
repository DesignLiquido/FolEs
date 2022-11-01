import { Modificador } from "./superclasse/modificador";

export class MascaraImagem extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-imagem", "máscara-imagem"], "mask-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
