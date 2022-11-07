import { Modificador } from "./superclasse/modificador";

export class CorBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda", "border-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
