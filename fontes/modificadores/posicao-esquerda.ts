import { Modificador } from "./superclasse/modificador";

export class PosicaoEsquerda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-esquerda", "posição-esquerda"], "left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
