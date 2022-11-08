import { Modificador } from "./superclasse/modificador";

export class RaioFinalBordaInicial extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-final-borda-inicial", "border-start-end-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
