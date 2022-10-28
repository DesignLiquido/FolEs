import { Modificador } from "./superclasse/modificador";

export class FonteSintetizar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-sintetizar", "font-synthesis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
