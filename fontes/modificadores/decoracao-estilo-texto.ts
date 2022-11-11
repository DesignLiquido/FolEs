import { Modificador } from "./superclasse/modificador";

export class DecoracaoEstiloTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["decoracao-estilo-texto", "decoração-estilo-texto"], 
            "text-decoration-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
