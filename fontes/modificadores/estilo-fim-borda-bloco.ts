import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-fim-borda-bloco", "border-block-end-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
