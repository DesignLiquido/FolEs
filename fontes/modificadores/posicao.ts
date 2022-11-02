import { Modificador } from "./superclasse/modificador";

export class Posicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicao", "posição"], "position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
