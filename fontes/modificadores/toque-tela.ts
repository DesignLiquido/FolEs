import { Modificador } from "./superclasse/modificador";

export class ToqueTela extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("toque-tela", "touch-action");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
