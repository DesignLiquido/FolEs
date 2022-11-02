import { Modificador } from "./superclasse/modificador";

export class AjustarObjeto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ajustar-objeto", "object-fit");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
