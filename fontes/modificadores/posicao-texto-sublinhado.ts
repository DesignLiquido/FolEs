import { Modificador } from "./superclasse/modificador";

export class PosicaoTextoSublinhado extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"], 
            "text-underline-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
