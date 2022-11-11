import { Modificador } from "./superclasse/modificador";

export class Transicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["transicao", "transição"], "transition");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
