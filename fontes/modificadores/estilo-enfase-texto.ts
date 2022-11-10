import { Modificador } from "./superclasse/modificador";

export class EstiloEnfaseTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-enfase-texto", "estilo-ênfase-texto"], 
            "text-emphasis-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
