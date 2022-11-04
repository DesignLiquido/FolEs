import { Modificador } from "./superclasse/modificador";

export class FluxoEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fluxo-em-grade", "grid-auto-flow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
