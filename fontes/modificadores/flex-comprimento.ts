import { Modificador } from "./superclasse/modificador";

export class FlexComprimento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex-comprimento", "flex-basis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
