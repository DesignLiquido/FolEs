import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Deslocamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("deslocamento", "offset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
