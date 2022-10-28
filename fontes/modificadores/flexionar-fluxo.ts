import { Modificador } from "./superclasse/modificador";

export class FlexionarFluxo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flexionar-fluxo", "flex-flow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
