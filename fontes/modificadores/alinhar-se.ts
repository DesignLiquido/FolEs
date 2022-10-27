import { Modificador } from "./modificador";

export class AlinharSe extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-se", "align-self");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
