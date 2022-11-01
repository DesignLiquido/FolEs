import { Modificador } from "./superclasse/modificador";

export class MascaraTamanho extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-tamanho", "máscara-tamanho"], "mask-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
