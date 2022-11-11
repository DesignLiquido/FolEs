import { Modificador } from "./superclasse/modificador";

export class SombraCaixa extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("sombra-caixa", "box-shadow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
