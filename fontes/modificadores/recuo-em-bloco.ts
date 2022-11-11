import { Modificador } from "./superclasse/modificador";

export class RecuoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-em-bloco", "padding-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
