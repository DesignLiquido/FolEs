import { Modificador } from "./superclasse/modificador";

export class MascaraOrigem extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-origem", "máscara-origem"], "mask-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
