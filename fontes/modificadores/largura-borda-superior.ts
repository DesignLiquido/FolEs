import { Modificador } from "./superclasse/modificador";

export class LarguraBordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-superior", "border-top-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
