import { Modificador } from "./superclasse/modificador";

export class InserirAlinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("inserir-alinhado", "inset-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
