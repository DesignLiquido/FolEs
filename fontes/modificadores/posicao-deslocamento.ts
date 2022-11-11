import { Modificador } from "./superclasse/modificador";

export class PosicaoDeslocamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-deslocamento", "posição-deslocamento"], 
            "offset-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
