import { Modificador } from "./superclasse/modificador";

export class OrdemPintura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ordem-pintura", "paint-order");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
