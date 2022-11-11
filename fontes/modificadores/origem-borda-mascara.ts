import { Modificador } from "./superclasse/modificador";

export class OrigemBordaMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["origem-borda-mascara", "origem-borda-máscara"], 
            "mask-border-source"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
