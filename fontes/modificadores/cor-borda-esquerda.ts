import { Modificador } from "./superclasse/modificador";

export class CorBordaEsquerda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-esquerda", "border-left-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
