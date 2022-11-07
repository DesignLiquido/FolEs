import { Modificador } from "./superclasse/modificador";

export class EstiloBordaDireita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-direita", "border-right-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
