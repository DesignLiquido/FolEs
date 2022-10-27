import { Modificador } from "./modificador";

export class FundoPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["fundo-posicao", "fundo-posição"], "background-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
