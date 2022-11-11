import { Modificador } from "./superclasse/modificador";

export class PropriedadeTransicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["propriedade-transicao", "propriedade-transição"], 
            "transition-property"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
