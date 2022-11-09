import { Modificador } from "./superclasse/modificador";

export class ModoBordaMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"], 
            "mask-border-mode"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
