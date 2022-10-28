import { Modificador } from "./superclasse/modificador";

export class ResetarTudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("resetar-tudo", "all");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
