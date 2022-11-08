import { Modificador } from "./superclasse/modificador";

export class CorFimBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-fim-borda-bloco", "border-block-end-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
