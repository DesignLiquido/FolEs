import { Modificador } from "./superclasse/modificador";

export class BordaRaioSuperiorEsquerdo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-raio-superior-esquerdo", "border-top-left-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
