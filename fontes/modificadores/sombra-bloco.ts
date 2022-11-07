import { Modificador } from "./superclasse/modificador";

export class SombraBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("sombra-bloco", "box-shadow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
