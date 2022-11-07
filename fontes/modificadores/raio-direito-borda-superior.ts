import { Modificador } from "./superclasse/modificador";

export class RaioDireitoBordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-direito-borda-superior", "border-top-right-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
