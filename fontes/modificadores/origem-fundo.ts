import { Modificador } from "./superclasse/modificador";

export class OrigemFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("origem-fundo", "background-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
