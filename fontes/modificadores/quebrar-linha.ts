import { Modificador } from "./superclasse/modificador";

export class QuebrarLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("quebrar-linha", "line-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
