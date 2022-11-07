import { Modificador } from "./superclasse/modificador";

export class Conteudo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["conteudo", "conteúdo"], "content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
