import { Modificador } from "./superclasse/modificador";

export class RaioDireitoBordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-direito-borda-inferior", "border-bottom-right-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
