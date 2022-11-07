import { Modificador } from "./superclasse/modificador";

export class RaioEsquerdoBordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-esquerdo-borda-inferior", "border-bottom-left-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
