import { Modificador, PragmasModificador } from "./superclasse";

export class Filtro extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("filtro", "filter");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
