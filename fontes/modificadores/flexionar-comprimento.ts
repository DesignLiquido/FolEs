import { Modificador } from "./superclasse/modificador";

export class FlexionarComprimento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-comprimento", "flex-basis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
