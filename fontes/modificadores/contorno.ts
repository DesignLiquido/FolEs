import { Modificador } from "./superclasse/modificador";

export class Contorno extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contorno", "outline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
