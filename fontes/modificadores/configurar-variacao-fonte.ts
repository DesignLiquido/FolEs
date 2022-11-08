import { Modificador } from "./superclasse/modificador";

export class ConfigurarVariacaoFonte extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["configurar-variacao-fonte", "configurar-variação-fonte"], 
            "font-variation-settings"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
