import { Modificador } from "./superclasse/modificador";

export class ColunaRegrasCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-regras-cor", "column-rules-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
