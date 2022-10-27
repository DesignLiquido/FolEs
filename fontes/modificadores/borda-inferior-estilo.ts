import { Modificador } from "./modificador";

export class BordaInferiorEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior-estilo", "border-bottom-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
