import { Modificador } from "./superclasse/modificador";

export class InicioBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-em-bloco", "início-borda-em-bloco"], 
            "border-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
