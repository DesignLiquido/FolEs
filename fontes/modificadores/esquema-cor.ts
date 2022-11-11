import { Modificador } from "./superclasse/modificador";

export class EsquemaCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("esquema-cor", "color-scheme");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
