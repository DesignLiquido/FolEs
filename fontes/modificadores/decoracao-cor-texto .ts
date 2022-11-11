import { Modificador } from "./superclasse/modificador";

export class DecoracaoCorTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["decoracao-cor-texto", "decoração-cor-texto"], 
            "text-decoration-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
