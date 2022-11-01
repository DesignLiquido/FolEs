import { Modificador } from "./superclasse/modificador";

export class MascaraRepeticao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-repeticao", "máscara-repetição"], "mask-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
