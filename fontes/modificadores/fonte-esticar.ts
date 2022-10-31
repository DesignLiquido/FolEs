import { Modificador } from "./superclasse/modificador";

export class FonteEsticar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-esticar", "font-stretch");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
