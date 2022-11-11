import { Modificador } from "./superclasse/modificador";

export class LarguraInicioBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["largura-inicio-borda-em-bloco", "largura-início-borda-em-bloco"], 
            "border-block-start-width"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
