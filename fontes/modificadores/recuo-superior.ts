import { Modificador } from "./superclasse/modificador";

export class RecuoSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-superior", "padding-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
