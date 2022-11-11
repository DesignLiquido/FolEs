import { Modificador } from "./superclasse/modificador";

export class AoMudar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ao-mudar", "will-change");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
