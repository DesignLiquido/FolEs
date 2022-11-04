import { Modificador } from "./superclasse/modificador";

export class RegrasColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("regras-coluna", "column-rules");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
