import { Modificador } from "./superclasse/modificador";

export class Posicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["posicao", "posição"], "position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
