import { Modificador } from "./superclasse/modificador";

export class TempoTransicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["tempo-transicao", "tempo-transição"], 
            "transition-timing-function"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
