import { Modificador } from "./superclasse/modificador";

export class InserirBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("inserir-bloco", "inset-block");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
