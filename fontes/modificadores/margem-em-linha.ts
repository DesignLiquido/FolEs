import { Modificador } from "./superclasse/modificador";

export class MargemEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-linha", "margin-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
