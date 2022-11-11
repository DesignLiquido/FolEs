import { Modificador } from "./superclasse/modificador";

export class PosicaoFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-fundo", "posição-fundo"], "background-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
