import { Modificador } from "./superclasse/modificador";

export class DecoracaoCaixa extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["decoracao-caixa", "decoração-caixa"], "box-decoration-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
