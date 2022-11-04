import { Modificador } from "./superclasse/modificador";

export class CorBordaDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-direita", "border-right-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
