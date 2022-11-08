import { Modificador } from "./superclasse/modificador";

export class CorBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-bloco", "border-block-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
