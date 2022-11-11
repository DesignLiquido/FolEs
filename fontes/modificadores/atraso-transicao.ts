import { Modificador } from "./superclasse/modificador";

export class AtrasoTransicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["atraso-transicao", "atraso-transição"], 
            "transition-delay"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
