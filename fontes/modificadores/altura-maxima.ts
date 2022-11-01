import { Modificador } from "./superclasse/modificador";

export class AlturaMaxima extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["altura-maxima", "altura-máxima"], "max-height");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
