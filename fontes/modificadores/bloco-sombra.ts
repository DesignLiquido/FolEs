import { Modificador } from "./superclasse/modificador";

export class BlocoSombra extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("bloco-sombra", "box-shadow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
