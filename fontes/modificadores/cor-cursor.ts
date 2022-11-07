import { Modificador } from "./superclasse/modificador";

export class CorCursor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-cursor", "caret-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
