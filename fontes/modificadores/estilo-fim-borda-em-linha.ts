import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-fim-borda-em-linha", "border-inline-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
