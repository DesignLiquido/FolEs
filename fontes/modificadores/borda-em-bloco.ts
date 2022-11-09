import { Modificador } from "./superclasse/modificador";

export class BordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-em-bloco", "border-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
