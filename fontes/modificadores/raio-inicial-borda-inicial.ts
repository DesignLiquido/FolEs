import { Modificador } from "./superclasse/modificador";

export class RaioInicialBordaInicial extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-inicial-borda-inicial", "border-start-start-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
