import { Modificador } from "./superclasse/modificador";

export class ContornoDeslocar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contorno-deslocar", "outline-offset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
