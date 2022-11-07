import { Modificador } from "./superclasse/modificador";

export class LinhasInferiores extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("linhas-inferiores", "orphans");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
