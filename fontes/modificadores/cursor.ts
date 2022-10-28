import { Modificador } from "./superclasse/modificador";

export class Cursor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cursor", "cursor");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
