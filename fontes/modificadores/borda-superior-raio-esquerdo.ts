import { Modificador } from "./superclasse/modificador";

export class BordaSuperiorRaioEsquerdo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior-raio-esquerdo", "border-top-left-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
