import { Modificador } from "./superclasse/modificador";

export class AnimacaoRepeticao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["animacao-repeticao", "animação-repetição"], 
            "animation-iteration-count"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
