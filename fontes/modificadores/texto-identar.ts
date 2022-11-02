import { Modificador } from "./superclasse/modificador";

export class TextoIdentar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-identar", "text-indent");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
