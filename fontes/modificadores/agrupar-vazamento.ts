import { Modificador } from "./superclasse/modificador";

export class AgruparVazamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("agrupar-vazamento", "overflow-wrap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
