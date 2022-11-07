import { Modificador } from "./superclasse/modificador";

export class RecuoInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-inferior", "padding-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
