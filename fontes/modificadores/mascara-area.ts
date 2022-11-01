import { Modificador } from "./superclasse/modificador";

export class MascaraArea extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-area", "máscara-área"], "mask-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
