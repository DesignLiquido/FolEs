import { Modificador } from "./superclasse/modificador";

export class FlexAgrupar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex-agrupar", "flex-wrap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
