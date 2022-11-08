import { Modificador } from "./superclasse/modificador";

export class InserirFimAlinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("inserir-fim-alinhado", "inset-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
