import { Modificador } from "./superclasse/modificador";

export class EventosPonteiro extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("eventos-ponteiro", "pointer-events");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
