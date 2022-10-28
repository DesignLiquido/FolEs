import { Modificador } from "./superclasse/modificador";

export class BordaInferiorCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior-cor", "border-bottom-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
