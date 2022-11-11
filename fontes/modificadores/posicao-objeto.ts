import { Modificador } from "./superclasse/modificador";

export class PosicaoObjeto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-objeto", "posição-objeto"], "object-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
