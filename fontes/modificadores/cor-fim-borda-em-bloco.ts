import { Modificador } from "./superclasse/modificador";

export class CorFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-fim-borda-em-bloco", "border-block-end-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
