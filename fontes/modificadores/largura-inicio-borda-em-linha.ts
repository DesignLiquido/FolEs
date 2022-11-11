import { Modificador } from "./superclasse/modificador";

export class LarguraInicioBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["largura-inicio-borda-em-linha", "largura-início-borda-em-linha"], 
            "border-inline-start-width"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
