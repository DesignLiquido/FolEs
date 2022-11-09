import { Modificador } from "./superclasse/modificador";

export class InicioBordaMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-mascara", "início-borda-máscara"], 
            "mask-border-outset"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
