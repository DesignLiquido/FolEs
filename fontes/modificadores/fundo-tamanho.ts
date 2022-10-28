import { Modificador } from "./superclasse/modificador";

export class FundoTamanho extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-tamanho", "background-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
