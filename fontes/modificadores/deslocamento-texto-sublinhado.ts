import { Modificador } from "./superclasse/modificador";

export class DeslocamentoTextoSublinhado extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("deslocamento-texto-sublinhado", "text-underline-offset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
