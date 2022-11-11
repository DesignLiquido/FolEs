import { Modificador } from "./superclasse/modificador";

export class LarguraBordaMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["largura-borda-mascara", "largura-borda-máscara"], 
            "mask-border-width"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
