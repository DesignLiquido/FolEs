import { Modificador } from "./superclasse/modificador";

export class Mascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["mascara", "máscara"], "mask");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
