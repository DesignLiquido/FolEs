import { Modificador } from "./superclasse/modificador";

export class AnimacaoVelocidade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["animacao-velocidade", "animação-velocidade"], 
            "animation-timing-function"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
