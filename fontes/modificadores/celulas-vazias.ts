import { Modificador } from "./superclasse/modificador";

export class CelulasVazias extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["celulas-vazias", "células-vazias"], "empty-cells");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
