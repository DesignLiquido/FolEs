import { Modificador } from "./superclasse/modificador";

export class IdentarTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("identar-texto", "text-indent");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
