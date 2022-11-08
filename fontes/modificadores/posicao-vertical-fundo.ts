import { Modificador } from "./superclasse/modificador";

export class PosicaoVerticalFundo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"], 
            "background-position-y"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
