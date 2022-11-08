import { Modificador } from "./superclasse/modificador";

export class InserirFimBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("inserir-fim-bloco", "inset-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
