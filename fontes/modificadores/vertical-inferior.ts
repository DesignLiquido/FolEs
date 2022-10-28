import { Modificador } from "./superclasse/modificador";

export class VerticalInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vertical-inferior", "bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}