import { Modificador } from "./superclasse/modificador";

export class BordaMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["borda-mascara", "borda-máscara"], "mask-border");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
