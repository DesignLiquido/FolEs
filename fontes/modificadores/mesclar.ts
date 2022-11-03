import { Modificador } from "./superclasse/modificador";

export class Mesclar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("mesclar", "mix-blend-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
