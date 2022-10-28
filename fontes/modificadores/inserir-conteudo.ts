import { Modificador } from "./superclasse/modificador";

export class InserirConteudo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["inserir-conteudo", "inserir-conteúdo"], "content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
