import { Modificador } from "./superclasse/modificador";

export class TextoCombinarVertical extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-combinar-vertical", "text-combine-upright");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
