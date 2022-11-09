import { Modificador } from "./superclasse/modificador";

export class TrajetoDeslocamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("trajeto-deslocamento", "offset-path");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
