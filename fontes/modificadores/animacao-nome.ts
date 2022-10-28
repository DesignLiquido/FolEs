import { Modificador } from "./superclasse/modificador";

export class AnimacaoNome extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["animacao-nome", "animação-nome"], "animation-name");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
