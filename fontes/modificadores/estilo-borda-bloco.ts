import { Modificador } from "./superclasse/modificador";

export class EstiloBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-bloco", "border-block-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
