import { Modificador } from "./superclasse/modificador";

export class PosicionarItens extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("posicionar-itens", "place-items");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
