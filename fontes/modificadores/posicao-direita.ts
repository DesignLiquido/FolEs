import { Modificador } from "./superclasse/modificador";

export class PosicaoDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-direita", "posição-direita"], "right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
