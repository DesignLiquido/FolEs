import { Modificador } from "./superclasse/modificador";

export class PosicaoLegenda extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicao-legenda", "posição-legenda"], "caption-side");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
