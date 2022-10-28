import { Modificador } from "./superclasse/modificador";

export class FundoEstender extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-estender", "background-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
