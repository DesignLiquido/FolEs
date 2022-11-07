import { Modificador } from "./superclasse/modificador";

export class RegrasCorColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("regras-cor-coluna", "column-rules-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
