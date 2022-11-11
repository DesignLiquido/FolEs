import { Modificador } from "./superclasse/modificador";

export class RepetirAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["repetir-animacao", "repetir-animação"], 
            "animation-iteration-count"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
