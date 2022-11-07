import { Modificador } from "./superclasse/modificador";

export class TamanhoFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-fonte", "font-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}