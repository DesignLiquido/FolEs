import { Modificador } from "./superclasse/modificador";

export class DecoracaoEspessuraTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["decoracao-espessura-texto", "decoração-espessura-texto"], 
            "text-decoration-thickness"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
