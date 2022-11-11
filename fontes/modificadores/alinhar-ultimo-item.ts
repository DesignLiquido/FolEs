import { Modificador } from "./superclasse/modificador";

export class AlinharUltimoItem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["alinhar-ultimo-item", "alinhar-último-item"], 
            "text-align-last"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
