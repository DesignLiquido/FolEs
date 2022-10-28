import { Modificador } from "./superclasse/modificador";

export class ContadorResetar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contador-resetar", "counter-reset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
