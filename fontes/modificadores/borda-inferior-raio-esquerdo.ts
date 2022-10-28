import { Modificador } from "./superclasse/modificador";

export class BordaInferiorRaioEsquerdo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior-raio-esquerdo", "border-bottom-left-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
