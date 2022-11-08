import { Modificador } from "./superclasse/modificador";

export class EstiloBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-alinhada", "border-inline-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
