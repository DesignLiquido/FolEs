import { Modificador } from "./superclasse/modificador";

export class RepeticaoBordaMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["repeticao-borda-mascara", "repetição-borda-máscara"], 
            "mask-border-repeat"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
