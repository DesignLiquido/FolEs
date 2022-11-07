import { Modificador } from "./superclasse/modificador";

export class ResetarContador extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("resetar-contador", "counter-reset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
