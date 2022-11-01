import { Modificador } from "./superclasse/modificador";

export class ListaEstiloPosicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["lista-estilo-posicao", "lista-estilo-posição"], "list-style-position");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
