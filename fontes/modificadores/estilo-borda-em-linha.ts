import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-em-linha", "border-inline-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
