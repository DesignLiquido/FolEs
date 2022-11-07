import { Modificador } from "./superclasse/modificador";

export class OrientacaoTexto extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["orientacao-texto", "orientação-texto"], "text-orientation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
