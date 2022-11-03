import { Modificador } from "./superclasse/modificador";

export class BordaRaioSuperiorDireito extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-raio-superior-direito", "border-top-right-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
