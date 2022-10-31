import { Modificador } from "./superclasse/modificador";

export class IncrementarContador extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("incrementar-contador", "counter-increment");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
