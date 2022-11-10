import { Modificador } from "./superclasse/modificador";

export class QuandoMudar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("quando-mudar", "will-change");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
