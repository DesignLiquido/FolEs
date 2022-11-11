import { Modificador } from "./superclasse/modificador";

export class DuracaoTransicao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["duracao-transicao", "duração-transição"], 
            "transition-duration"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
