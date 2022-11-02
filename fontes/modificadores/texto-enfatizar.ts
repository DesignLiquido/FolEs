import { Modificador } from "./superclasse/modificador";

export class TextoEnfatizar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-enfatizar", "text-emphasis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
