import { Modificador } from "./superclasse/modificador";

export class PosicaoTextoSublinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"], 
            "text-underline-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
