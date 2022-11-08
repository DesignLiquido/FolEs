import { Modificador } from "./superclasse/modificador";

export class BordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-bloco", "border-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
