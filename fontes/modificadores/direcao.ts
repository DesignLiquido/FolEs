import { Modificador } from "./superclasse/modificador";

export class Direcao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["direcao", "direção"], "direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
