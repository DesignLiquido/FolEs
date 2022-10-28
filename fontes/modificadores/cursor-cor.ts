import { Modificador } from "./superclasse/modificador";

export class CursorCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cursor-cor", "caret-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
