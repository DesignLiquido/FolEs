import { Modificador } from "./superclasse/modificador";

export class PosicaoHorizontalFundo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"], 
            "background-position-x"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
