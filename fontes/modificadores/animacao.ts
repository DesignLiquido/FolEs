import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Animacao extends Modificador {
    // Esse seletor pode receber de 2 a 8 valores.
    // Os valores aceitos são bem específicos. TODO: Pensar em uma lógica de validação.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/animation

    constructor(valor: string, quantificador: string) {
        super(["animacao", "animação"], "animation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
