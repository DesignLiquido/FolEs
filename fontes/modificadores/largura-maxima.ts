import { Modificador } from "./superclasse/modificador";

export class LarguraMaxima extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["largura-maxima", "largura-máxima"], "max-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
