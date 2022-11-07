import { Modificador } from "./superclasse/modificador";

export class CorDestaque extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-destaque", "accent-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
