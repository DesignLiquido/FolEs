import { Modificador } from "./superclasse/modificador";

export class PosicaoEnfaseTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"], 
            "text-emphasis-position"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
