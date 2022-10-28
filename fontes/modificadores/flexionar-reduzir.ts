import { Modificador } from "./superclasse/modificador";

export class FlexionarReduzir extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-reduzir", "flex-shrink");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
