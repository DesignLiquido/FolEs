import { Modificador } from "./superclasse/modificador";

export class CorFimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-fim-borda-em-linha", "border-inline-end-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
