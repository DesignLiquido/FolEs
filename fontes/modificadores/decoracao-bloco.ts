import { Modificador } from "./superclasse/modificador";

export class DecoracaoBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["decoracao-bloco", "decoração-bloco"], "box-decoration-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}