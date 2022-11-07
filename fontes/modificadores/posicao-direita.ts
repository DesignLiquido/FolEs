import { Modificador } from "./superclasse/modificador";

export class PosicaoDireita extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicao-direita", "posição-direita"], "right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
