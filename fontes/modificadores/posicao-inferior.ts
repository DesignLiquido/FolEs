import { Modificador } from "./superclasse/modificador";

export class PosicaoInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao-inferior", "posição-inferior"], "bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
