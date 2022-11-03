import { Modificador } from "./superclasse/modificador";

export class BordaSuperiorRaioDireito extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior-raio-direito", "border-top-right-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
