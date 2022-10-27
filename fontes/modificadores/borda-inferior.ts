import { Modificador } from "./modificador";

export class BordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior", "border-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
