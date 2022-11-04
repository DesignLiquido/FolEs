import { Modificador } from "./superclasse/modificador";

export class RaioEsquerdoBordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-esquerdo-borda-superior", "border-top-left-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
