import { Modificador, PragmasModificador } from "./superclasse";

export class Transformar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("transformar", "transform");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
