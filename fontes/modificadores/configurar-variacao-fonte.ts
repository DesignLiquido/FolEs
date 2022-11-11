import { Modificador } from "./superclasse/modificador";

export class ConfiguracoesVariacaoFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"], 
            "font-variation-settings"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
