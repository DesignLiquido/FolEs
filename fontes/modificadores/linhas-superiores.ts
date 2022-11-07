import { Modificador } from "./superclasse/modificador";

export class LinhasSuperiores extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("linhas-superiores", "widows");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
