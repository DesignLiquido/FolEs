import { Modificador } from "./superclasse/modificador";

export class PosicaoVerticalFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"], 
            "background-position-y"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
