import { Modificador } from "./superclasse/modificador";

export class FlexionarCrescimento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-crescimento", "flex-grow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
