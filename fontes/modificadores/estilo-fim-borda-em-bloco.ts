import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-fim-borda-em-bloco", "border-block-end-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
