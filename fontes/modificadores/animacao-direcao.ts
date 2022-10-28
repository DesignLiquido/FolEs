import { Modificador } from "./superclasse/modificador";

export class AnimacaoDirecao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-direcao", "animação-direção"], "animation-direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
