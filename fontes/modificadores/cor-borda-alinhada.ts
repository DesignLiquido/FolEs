import { Modificador } from "./superclasse/modificador";

export class CorBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-alinhada", "border-inline-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
