import { Modificador } from "./superclasse/modificador";

export class Cor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor", "color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
