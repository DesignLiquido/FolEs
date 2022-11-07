import { Modificador } from "./superclasse/modificador";

export class FlexFluxo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flex-fluxo", "flex-flow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
