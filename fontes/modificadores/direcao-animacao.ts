import { Modificador } from "./superclasse/modificador";

export class DirecaoAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["direcao-animacao", "direção-animação"], 
            "animation-direction"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
