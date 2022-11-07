import { Modificador } from "./superclasse/modificador";

export class AlinharVertical extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-vertical", "vertical-align");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
