import { Modificador } from "./superclasse/modificador";

export class TamanhoMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
