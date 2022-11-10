import { Modificador } from "./superclasse/modificador";

export class DecoracaoLinhaTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["decoracao-linha-texto", "decoração-linha-texto"],
            "text-decoration-line"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
