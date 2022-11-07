import { Modificador } from "./superclasse/modificador";

export class AlturaLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("altura-linha", "line-height");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
