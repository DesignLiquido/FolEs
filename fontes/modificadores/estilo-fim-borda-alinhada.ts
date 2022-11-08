import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-fim-borda-alinhada", "border-inline-end-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
