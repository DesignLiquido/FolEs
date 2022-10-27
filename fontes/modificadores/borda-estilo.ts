import { Modificador } from "./modificador";

export class BordaEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-estilo", "border-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
