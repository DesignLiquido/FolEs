import { Modificador } from "./superclasse/modificador";

export class PosicionarConteudo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["posicionar-conteudo", "posicionar-conteúdo"], "place-content");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
