import { Modificador } from "./modificador";

export class BordaInferiorRaioDireito extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-inferior-raio-direito", "border-bottom-right-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
