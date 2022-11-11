import { Modificador } from "./superclasse/modificador";

export class InsercaoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["insercao-em-bloco", "inserção-em-bloco"], "inset-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
