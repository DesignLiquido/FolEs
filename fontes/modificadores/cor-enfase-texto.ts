import { Modificador } from "./superclasse/modificador";

export class CorEnfaseTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["cor-enfase-texto", "cor-ênfase-texto"], 
            "text-emphasis-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
