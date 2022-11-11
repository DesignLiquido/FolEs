import { Modificador } from "./superclasse/modificador";

export class Aparencia extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["aparencia", "aparência"], "appearance");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
