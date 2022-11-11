import { Modificador } from "./superclasse/modificador";

export class InsercaoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["insercao-em-linha", "inserção-em-linha"], "inset-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
