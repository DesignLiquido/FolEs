import { Modificador } from "./superclasse/modificador";

export class PosicaoSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-superior", "posição-superior"], "top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
