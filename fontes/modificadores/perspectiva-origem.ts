import { Modificador } from "./superclasse/modificador";

export class PerspectivaOrigem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("perspectiva-origem", "perspective-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
