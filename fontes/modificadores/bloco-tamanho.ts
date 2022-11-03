import { Modificador } from "./superclasse/modificador";

export class BlocoTamanho extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("bloco-tamanho", "box-sizing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
