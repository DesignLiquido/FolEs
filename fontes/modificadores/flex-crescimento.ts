import { Modificador } from "./superclasse/modificador";

export class FlexCrescimento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex-crescimento", "flex-grow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
