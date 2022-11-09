import { Modificador } from "./superclasse/modificador";

export class QuebraDecoracaoCaixa extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"], 
            "box-decoration-break"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
