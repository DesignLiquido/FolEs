import { Modificador } from "./superclasse/modificador";

export class MargemDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-direita", "margin-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
