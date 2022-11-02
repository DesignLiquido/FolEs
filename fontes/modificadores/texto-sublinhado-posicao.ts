import { Modificador } from "./superclasse/modificador";

export class TextoSublinhadoPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["texto-sublinhado-posicao", "texto-sublinhado-posição"], 
            "text-underline-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
