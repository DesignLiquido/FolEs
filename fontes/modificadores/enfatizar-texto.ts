import { Modificador } from "./superclasse/modificador";

export class EnfatizarTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("enfatizar-texto", "text-emphasis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
