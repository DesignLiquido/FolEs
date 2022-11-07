import { Modificador } from "./superclasse/modificador";

export class AlinharItens extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("alinhar-itens", "align-items");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
