import { Modificador } from "./superclasse/modificador";

export class FonteVariacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["fonte-variacao", "fonte-variação"], "font-variant");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
