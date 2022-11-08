import { Modificador } from "./superclasse/modificador";

export class JustificarSe extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("justificar-se", "justify-self");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
