import { Modificador } from "./superclasse/modificador";

export class FlexionarAgrupar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-agrupar", "flex-wrap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
