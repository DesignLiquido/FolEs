import { Modificador } from "./superclasse/modificador";

export class PosicaoSuperior extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicao-superior", "posição-superior"], "top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
