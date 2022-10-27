import { Modificador } from "./modificador";

export class BordaDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-direita", "border-right");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
