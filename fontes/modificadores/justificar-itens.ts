import { Modificador } from "./superclasse/modificador";

export class JustificarItens extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("justificar-itens", "justify-items");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
