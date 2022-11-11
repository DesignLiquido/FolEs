import { Modificador } from "./superclasse/modificador";

export class InicioBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-em-linha", "início-borda-em-linha"], 
            "border-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
