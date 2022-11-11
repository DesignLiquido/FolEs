import { Modificador } from "./superclasse/modificador";

export class Contem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["contem", "contém"], "contain");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
