import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-em-bloco", "border-block-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
