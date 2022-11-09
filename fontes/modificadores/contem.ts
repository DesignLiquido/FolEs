import { Modificador } from "./superclasse/modificador";

export class Contem extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["contem", "contém"], "contain");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
