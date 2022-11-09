import { Modificador } from "./superclasse/modificador";

export class RotacaoDeslocamento extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"], 
            "offset-rotate"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
