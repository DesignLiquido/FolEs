import { Modificador } from "./superclasse/modificador";

export class BordaInferiorLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior-largura", "border-bottom-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
