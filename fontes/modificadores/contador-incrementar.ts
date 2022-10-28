import { Modificador } from "./superclasse/modificador";

export class ContadorIncrementar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contador-incrementar", "counter-increment");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
