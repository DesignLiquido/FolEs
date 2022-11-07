import { Modificador } from "./superclasse/modificador";

export class Coordenadas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coordenadas", "translate");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
