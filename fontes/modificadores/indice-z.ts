import { Modificador } from "./superclasse/modificador";

export class IndiceZ extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("indice-z", "z-index");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
