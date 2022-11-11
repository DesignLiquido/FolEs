import { Modificador } from "./superclasse/modificador";

export class ModoMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["modo-mascara", "modo-máscara"], "mask-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
