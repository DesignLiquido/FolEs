import { Modificador } from "./superclasse/modificador";

export class PosicaoHorizontalFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"], 
            "background-position-x"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
