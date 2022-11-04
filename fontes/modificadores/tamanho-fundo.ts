import { Modificador } from "./superclasse/modificador";

export class TamanhoFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-fundo", "background-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
