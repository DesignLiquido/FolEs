import { Modificador } from "./superclasse/modificador";

export class FormaExterna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("forma-externa", "shape-outside");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
