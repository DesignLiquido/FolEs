import { Modificador } from "./superclasse/modificador";

export class PosicaoMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["posicao-mascara", "posição-máscara"], "mask-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
