import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEsquerda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-esquerda", "border-left-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
