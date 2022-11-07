import { Modificador } from "./superclasse/modificador";

export class Hifens extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["hifens", "hífens"], "hyphens");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
