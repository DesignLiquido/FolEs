import { Modificador } from "./superclasse/modificador";

export class AlturaMaxima extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["altura-maxima", "altura-máxima"], "max-height");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
