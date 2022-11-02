import { Modificador } from "./superclasse/modificador";

export class PosicionarObjeto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("posicionar-objeto", "object-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
