import { Modificador } from "./superclasse/modificador";

export class AlinharTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-texto", "text-align");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
