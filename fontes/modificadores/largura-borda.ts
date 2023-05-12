import { Modificador, PragmasModificador } from "./superclasse";

export class LarguraBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda", "border-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
