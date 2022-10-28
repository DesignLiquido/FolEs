import { Modificador } from "./superclasse/modificador";

export class AnimacaoStatus extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-status", "animação-status"], "animation-play-state");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
