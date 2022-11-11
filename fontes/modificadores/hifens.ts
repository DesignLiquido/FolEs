import { Modificador } from "./superclasse/modificador";

export class Hifens extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["hifens", "hífens"], "hyphens");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
