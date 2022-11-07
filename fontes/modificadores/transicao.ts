import { Modificador } from "./superclasse/modificador";

export class Transicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["transicao", "transição"], "transition");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
