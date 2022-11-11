import { Modificador } from "./superclasse/modificador";

export class CorBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-em-linha", "border-inline-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
