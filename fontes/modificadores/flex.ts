import { Modificador } from "./superclasse/modificador";

export class Flex extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex", "flex");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
