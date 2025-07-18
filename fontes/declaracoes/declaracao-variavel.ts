import { Valor } from "../valores/valor";
import { Declaracao } from "./declaracao";

export class DeclaracaoVariavel extends Declaracao {
    nome: string;
    valores: Valor[]

    constructor(
        nome: string,
        valores: Valor[]
    ) {
        super();
        this.nome = nome;
        this.valores = valores;
    }
}
