import { Modificador } from "./superclasse/modificador";

export class ModoMescla extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modo-mescla", "mix-blend-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
