import { Modificador } from "./superclasse/modificador";

export class AnimacaoPreencher extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-preencher", "animação-preencher"], "animation-fill-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
