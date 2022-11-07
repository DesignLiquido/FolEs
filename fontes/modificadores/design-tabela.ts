import { Modificador } from "./superclasse/modificador";

export class DesignTabela extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("design-tabela", "table-layout");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
