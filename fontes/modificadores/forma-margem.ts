import { Modificador } from "./superclasse/modificador";

export class FormaMargem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("forma-margem", "shape-margin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
