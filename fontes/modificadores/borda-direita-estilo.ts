import { Modificador } from "./superclasse/modificador";

export class BordaDireitaEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-direita-estilo", "border-right-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
