import { Modificador } from "./superclasse/modificador";

export class TamanhoMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
