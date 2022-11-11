import { Modificador } from "./superclasse/modificador";

export class ModoBordaMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"], 
            "mask-border-mode"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
