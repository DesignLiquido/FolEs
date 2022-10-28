import { Modificador } from "./superclasse/modificador";

export class FonteRecursos extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-recursos", "font-feature-settings");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
