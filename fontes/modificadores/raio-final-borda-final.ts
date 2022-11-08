import { Modificador } from "./superclasse/modificador";

export class RaioFinalBordaFinal extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-final-borda-final", "border-end-end-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
