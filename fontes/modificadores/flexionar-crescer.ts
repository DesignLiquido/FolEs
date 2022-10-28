import { Modificador } from "./superclasse/modificador";

export class FlexionarCrescer extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-crescer", "flex-grow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
