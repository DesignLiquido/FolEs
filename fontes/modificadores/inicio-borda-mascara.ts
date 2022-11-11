import { Modificador } from "./superclasse/modificador";

export class InicioBordaMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-mascara", "início-borda-máscara"], 
            "mask-border-outset"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
