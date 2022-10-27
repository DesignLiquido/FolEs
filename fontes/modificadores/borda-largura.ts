import { Modificador } from "./modificador";

export class BordaLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-largura", "border-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
