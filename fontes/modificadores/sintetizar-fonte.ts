import { Modificador } from "./superclasse/modificador";

export class SintetizarFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("sintetizar-fonte", "font-synthesis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
