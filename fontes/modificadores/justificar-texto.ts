import { Modificador } from "./superclasse/modificador";

export class JustificarTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("justificar-texto", "text-justify");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
