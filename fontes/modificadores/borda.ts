import { Modificador } from "./modificador";

export class Borda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda", "border");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
