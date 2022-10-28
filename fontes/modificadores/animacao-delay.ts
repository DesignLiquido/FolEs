import { Modificador } from "./superclasse/modificador";

export class AnimacaoDelay extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-delay", "animação-delay"], "animation-delay");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
