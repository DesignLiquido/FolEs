import { Modificador } from "./superclasse/modificador";

export class DecoracaoTextoSublinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["decoracao-texto-sublinhado", "decoração-texto-sublinhado"], 
            "text-decoration-skip-ink"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
