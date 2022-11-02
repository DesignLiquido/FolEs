import { Modificador } from "./superclasse/modificador";

export class TextoVazado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-vazado", "text-overflow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
