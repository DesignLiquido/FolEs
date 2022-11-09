import { Modificador } from "./superclasse/modificador";

export class Insercao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["insercao", "inserção"], "inset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
