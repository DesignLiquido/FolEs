import { Modificador } from "./superclasse/modificador";

export class EstiloBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda", "border-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
