import { Modificador } from "./superclasse/modificador";

export class RegrasLarguraColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("regras-largura-coluna", "column-rules-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
