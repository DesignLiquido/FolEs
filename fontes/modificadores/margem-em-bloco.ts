import { Modificador } from "./superclasse/modificador";

export class MargemEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-em-bloco", "margin-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
