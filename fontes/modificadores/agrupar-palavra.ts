import { Modificador, PragmasModificador } from "./superclasse";

export class AgruparPalavra extends Modificador {
    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super("agrupar-palavra", "word-break", pragmas);
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
