import { Modificador } from "./superclasse/modificador";

export class FundoMesclar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-mesclar", "background-blend-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
