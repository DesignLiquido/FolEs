import { Modificador } from "./superclasse/modificador";

export class DefinirContador extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("definir-contador", "counter-set");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
