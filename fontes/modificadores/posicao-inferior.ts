import { Modificador } from "./superclasse/modificador";

export class PosicaoInferior extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicao-inferior", "posição-inferior"], "bottom");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
