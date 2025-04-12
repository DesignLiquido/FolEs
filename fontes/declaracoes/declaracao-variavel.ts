import { Valor } from "../valores/valor";
import { Declaracao } from "./declaracao";

export class DeclaracaoVariavel extends Declaracao {
    nome: string;
    valor: Valor | string;
    quantificador?: string;

    constructor(
        nome: string, 
        valor: Valor | string,
        quantificador: string = null,
    ) {
        super();
        this.nome = nome;
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
