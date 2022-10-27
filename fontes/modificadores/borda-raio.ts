import { Modificador } from "./modificador";

export class BordaRaio extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-raio", "border-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
