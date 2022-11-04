import { Modificador } from "./superclasse/modificador";

export class LarguraBordaDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-direita", "border-right-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
