import { Modificador } from "./superclasse/modificador";

export class TransicaoDelay extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["transicao-delay", "transição-delay"], "transition-delay");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
