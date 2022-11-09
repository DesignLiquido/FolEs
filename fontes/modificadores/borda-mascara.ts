import { Modificador } from "./superclasse/modificador";

export class BordaMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["borda-mascara", "borda-máscara"], "mask-border");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
