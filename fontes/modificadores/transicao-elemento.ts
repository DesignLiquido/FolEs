import { Modificador } from "./superclasse/modificador";

export class TransicaoElemento extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["transicao-elemento", "transição-elemento"], "transition-property");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
