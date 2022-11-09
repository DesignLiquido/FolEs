import { Modificador } from "./superclasse/modificador";

export class CorBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-em-bloco", "border-block-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
