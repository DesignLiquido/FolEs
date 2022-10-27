import { Modificador } from "./modificador";

export class AnimacaoVelocidade extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-velocidade", "animação-velocidade"], "animation-timing-function");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
