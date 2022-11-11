import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-inicio-borda-em-bloco", "estilo-início-borda-em-bloco"], 
            "border-block-start-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
