import { Modificador } from "./superclasse/modificador";

export class ContornoCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("contorno-cor", "outline-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
