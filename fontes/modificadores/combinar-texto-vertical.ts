import { Modificador } from "./superclasse/modificador";

export class CombinarTextoVertical extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("combinar-texto-vertical", "text-combine-upright");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
