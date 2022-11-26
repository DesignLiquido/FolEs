import { Modificador } from "./superclasse/modificador";

export class RotacaoDeslocamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"], 
            "offset-rotate"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
