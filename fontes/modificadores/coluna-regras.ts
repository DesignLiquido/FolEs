import { Modificador } from "./superclasse/modificador";

export class ColunaRegras extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-regras", "column-rules");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
