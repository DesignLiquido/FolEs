import { Modificador } from "./superclasse/modificador";

export class Misturar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("misturar", "mix-blend-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
