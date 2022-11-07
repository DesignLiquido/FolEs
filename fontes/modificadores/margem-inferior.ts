import { Modificador } from "./superclasse/modificador";

export class MargemInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-inferior", "margin-bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
