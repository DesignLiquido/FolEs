import { Modificador } from "./superclasse/modificador";

export class Animacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["animacao", "animação"], "animation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
