import { Modificador } from "./superclasse/modificador";

export class ImagemMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
