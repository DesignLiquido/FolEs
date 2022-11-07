import { Modificador } from "./superclasse/modificador";

export class EstenderColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estender-coluna", "column-span");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
