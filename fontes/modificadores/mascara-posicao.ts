import { Modificador } from "./superclasse/modificador";

export class MascaraPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-posicao", "máscara-posição"], "mask-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
