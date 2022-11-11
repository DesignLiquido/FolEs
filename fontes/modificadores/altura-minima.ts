import { Modificador } from "./superclasse/modificador";

export class AlturaMinima extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["altura-minima", "altura-mínima"], "min-height");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
