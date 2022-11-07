import { Modificador } from "./superclasse/modificador";

export class RegrasEstiloColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("regras-estilo-coluna", "column-rules-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
